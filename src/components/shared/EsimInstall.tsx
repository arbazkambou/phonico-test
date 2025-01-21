import { Col, Container, Row } from "react-bootstrap";
import styles from "./EsimInstall.module.css";
import Link from "next/link";
import Image from "next/image";

interface esimInstallPropsType {
  title: React.ReactNode;
  description: React.ReactNode;
  imgSrc: string;
}
function EsimInstall({ data }: { data: esimInstallPropsType }) {
  return (
    <section>
      <Container className={`${styles.section} py-4 px-3 px-md-5`}>
        <Row>
          <Col xl={6} className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-4">
              <h2 className="font50 fontWeight500">
                {/* Introducing a World of Connectivity with the{" "}
                <span className="textAccent">Phonico</span> eSIM App */}
                {data.title}
              </h2>
              <p className="font20 font400 textSecondary">
                {/* Download our eSIM App for monitoring your real-time data usage.
                You can also use this app to activate your eSIM, manage
                profiles, and get updates on new features and promotions. You
                can find this app on the Play Store and Apple Store! */}

                {data.description}
              </p>
            </div>
            <div className="d-flex flex-column gap-2">
              <h3 className="font20 fontWeight500">Download the App now</h3>
              <div className="d-flex gap-2 flex-column flex-md-row">
                <Link href={"https://apps.apple.com/app/id6468944607"}>
                  <Image
                    src={"/images/appleLink.svg"}
                    height={60}
                    width={190}
                    alt="Phonico apple iphone app"
                  />
                </Link>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.activatewireless.phonico&hl=en&gl=US"
                  }
                >
                  <Image
                    src={"/images/playLink.svg"}
                    height={60}
                    width={190}
                    alt="Phonico android app"
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col
            xl={6}
            className="position-relative d-flex justify-content-center"
          >
            <div className={`${styles.imgWrapper}`}>
              <Image
                src={data.imgSrc}
                fill
                style={{
                  objectFit:
                    data.imgSrc === "/images/mobileImg2.png"
                      ? "contain"
                      : "cover",
                }}
                alt="  Unlock a World of Connectivity in the USA with phonico"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EsimInstall;
