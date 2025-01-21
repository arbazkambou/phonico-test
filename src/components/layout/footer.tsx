import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col xl={4} className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-3">
              <Image
                src={"/images/siteLogo.png"}
                width={98}
                height={90}
                alt="Phonico logo"
                loading="eager"
                priority
              />
              <p className="font18">
                Stay Connected, Anytime and Anywhere with Phonico! Your Journey,
                Our Commitment to Unbeatable Connectivity.
              </p>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={"/images/headphone.svg"}
                  width={19}
                  height={19}
                  alt="Phonico phone call number"
                />
                <p className="font18 textAccent">(484)746-6426</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={"/images/emailIcon.svg"}
                  width={19}
                  height={19}
                  alt="Phonico email address"
                />
                <p className="font18 textAccent">support@phonico.com</p>
              </div>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <Link href={"https://www.instagram.com/phonico.usa/"}>
                <Image
                  src={"/images/instaIcon.svg"}
                  height={40}
                  width={40}
                  alt="instagram link"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/phonico/"}
                className="mt-1"
              >
                <Image
                  src={"/images/linkedinIcon.svg"}
                  height={40}
                  width={40}
                  alt="linkedin link"
                />
              </Link>

              <Link
                href={"https://www.facebook.com/phonico.usa/"}
                className="mt-1"
              >
                <Image
                  src={"/images/facebookIcon.svg"}
                  height={40}
                  width={40}
                  alt="facebook link"
                />
              </Link>
              <Link href={"https://twitter.com/phonicousa/"} className="mt-1">
                <Image
                  src={"/images/twitterIcon.svg"}
                  height={40}
                  width={40}
                  alt="twitter link"
                />
              </Link>
            </div>
          </Col>
          <Col
            xl={4}
            className="d-flex flex-column align-items-xl-center gap-2 mt-md-5"
          >
            <p className="font24 fontWeight500">Quick Links</p>
            <div
              className={`d-flex flex-column gap-2 ${styles.linksContainer}`}
            >
              <Link href="/" className="textPrimary">
                Home
              </Link>
              <Link href="/blog" className="textPrimary">
                Blog
              </Link>
              <Link href="/terms-and-conditions" className="textPrimary">
                Terms of use
              </Link>
              <Link href="/privacy-policy" className="textPrimary">
                Privacy Policy
              </Link>
            </div>
          </Col>
          <Col xl={4} className="mt-5 d-flex flex-column gap-3">
            <p className="font24 fontWeight500">
              Join Our <span className="textAccent">Newsletter</span>
            </p>
            <div
              className="position-relative w-100"
              style={{ maxWidth: "340px" }}
            >
              <input
                type="text"
                className={`${styles.input} px-3`}
                placeholder="Enter your email"
              />
              <button
                className={`myButton myButtonColored textWhite ${styles.sendButton} h-100`}
              >
                Send
              </button>
            </div>
            <h2 className="font20 fontWeight500">Download the App now</h2>
            <div className="d-flex gap-3">
              <Link href={"https://apps.apple.com/app/id6468944607"}>
                <Image
                  src={"/images/appleLink.svg"}
                  height={40}
                  width={127}
                  alt="apple store button"
                />
              </Link>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.activatewireless.phonico&hl=en&gl=US"
                }
              >
                <Image
                  src={"/images/playLink.svg"}
                  height={40}
                  width={127}
                  alt="apple store button"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <p className="text-center mt-4">
        Phonico © {currentYear}. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
