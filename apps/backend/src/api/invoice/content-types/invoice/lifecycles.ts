import * as crypto from "crypto";
import * as process from "process";

const generateRandomString = (length = 32) => {
  return crypto.randomBytes(length).toString("hex");
}


export default {
  async beforeCreate(event) {
    const { data } = event.params;

    const itemContentId =
      data.items?.[0]?.__pivot.component_type || "shared.invoice-item";

    const itemIds = data.items.map((item) => item.id);

    const items = await strapi.db.query(itemContentId).findMany({
      where: {
        id: {
          $in: itemIds,
        },
      },
    });

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      await strapi.db.query(itemContentId).update({
        where: { id: item.id },
        data: {
          total: item.quantity * item.netPrice,
        },
      });
    }

    event.params.data.subTotal = items.reduce((acc, item) => {
      return acc + item.quantity * item.netPrice;
    }, 0);

    event.params.data.vat =
      event.params.data.subTotal * event.params.data.vatRate;

    event.params.data.total =
      event.params.data.subTotal + event.params.data.vat;

    event.params.data.netWeight = items.reduce((acc, item) => {
      return acc + item.quantity * item.weight;
    }, 0);

    event.params.data.token= generateRandomString();

    event.params.data.downloadLink= `${process.env.FRONTEND_URL}/invoice/${event.params.data.token}`
  },
};
