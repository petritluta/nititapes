import Grid from "@/component/general/grid";
import Heading from "@/component/general/heading";
import { NextPage } from "next";
import ContactForm from "@/layout/contact";
import style from "./contact.module.css";
import Icon from "@/component/general/icon";

const Contact: NextPage<any> = async ({ params: { lang } }) => {
  return (
    <div>
      <div className="container">
        <div>
          <Heading
            title={"Contact"}
            desc={
              "To obtain more information on our products or services, please complete the form. We will contact you as soon as possible."
            }
          />
          <div className={style.contactInfo}>
            <Grid no={1}>
              <div>
                <ContactForm />
              </div>
              <div className={style.contactRight}>
                <div className="flex gap10">
                  <Icon
                    src="/icon/mail-white.svg"
                    type={"main"}
                    width={20}
                    height={20}
                  />
                  info@nititapes.com
                </div>
                <div className="flex gap10">
                  <Icon
                    src="/icon/phone-white.svg"
                    type={"main"}
                    width={20}
                    height={20}
                  />
                  <span>+383 44 222 222</span>
                </div>
                <div className="flex gap10">
                  <Icon
                    src="/icon/location.svg"
                    type={"main"}
                    width={20}
                    height={20}
                  />
                  <span> Prishtina, Kosova</span>
                </div>
                <div className="flex gap10">
                  <Icon
                    src="/icon/day.svg"
                    type={"main"}
                    width={20}
                    height={20}
                  />
                  <span>E hene - E premte</span>
                </div>
                <div className="flex gap10">
                  <Icon
                    src="/icon/time.svg"
                    type={"main"}
                    width={20}
                    height={20}
                  />
                  <span>08:00-17:00</span>
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
