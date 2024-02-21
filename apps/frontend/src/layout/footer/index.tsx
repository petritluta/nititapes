import Heading from "@/component/general/heading";
import style from "./footer.module.css";
import Image from "next/image";
import Grid from "@/component/general/grid";
import SocialMedia from "@/component/custom/socials";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <div className={style.locationIcon}>
        <Image
          src="/icon/location.png"
          alt="Niti Tape"
          width={70}
          height={70}
          priority
        />
      </div>
      <Heading
        title={"Where do we operate?"}
        desc={
          "We offer an extensive range of tapes, with professional solutions which always meet the highest quality standards. The HPX brand came into existence in 2004 and since then quality improvement and development are our absolute priority. Moreover, we can look back on more than 25 years of experience."
        }
      />
      <div className={`grayWrapper ${style.footerWrapper}`}>
        <Grid no={4}>
          <div>
            <Image
              src="/logo.svg"
              alt="Niti Tape"
              className={style.vercelLogo}
              width={190}
              height={70}
              priority
            />
            <SocialMedia />
          </div>
          <div>
            <p>Kategorite</p>
            <ul>
              <li>First</li>
              <li>First</li>
              <li>First</li>
            </ul>
          </div>
          <div>
            {" "}
            <p>About Us</p>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>First</li>
            </ul>
          </div>
          <div>
            {" "}
            <p>About Us</p>
            <ul>
              <li>First</li>
              <li>Contact</li>
              <li>First</li>
            </ul>
          </div>
        </Grid>
        <div className={`flex-space-between ${style.footerLinks}`}>
          <p>@2024 NitiTape</p>
          <div className="flex gap10">
            <Link href="">Privacy Policy</Link>
            <Link href="">Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
