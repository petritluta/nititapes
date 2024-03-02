/**
 * invoice controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::invoice.invoice', ({ strapi }) => ({

  async findWithToken(ctx) {
    const { token } = ctx.query;

    const entity = await strapi.db.query('api::invoice.invoice').findOne({
      where: { token },
      populate: ['items']
    });
    if (!entity) return ctx.notFound();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
