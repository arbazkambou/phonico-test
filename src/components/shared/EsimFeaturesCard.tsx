import { Col, Container, Row } from "react-bootstrap";
import styles from "./EsimFeaturesCard.module.css";
import Image from "next/image";

const cardsData = [
  {
    imgPath: "/images/phoneIcon.svg",
    heading: "Unlimited Calls & Sms",
    description:
      "Phonico wants you to stay connected with your loved ones all the time with no limits on Calls and Sms.",
  },
  {
    imgPath: "/images/moneyBag.svg",
    heading: "Variety of Data Plans",
    description:
      "Multiple travel eSIM Data plans packages, tailored to your needs so you can stay connected.",
  },
  {
    imgPath: "/images/speaker.svg",
    heading: "Easy Activation Process",
    description:
      "Phonico eSIM activation is so easy that anyone can do it. Just Scan the QR code or Activate it from the Phonico eSIM App.",
  },
  {
    imgPath: "/images/globe.svg",
    heading: " WirelessSecure Network",
    description:
      "Phonico understands your data privacy. We have applied the highest standard of security protocols to avoid any cyber threat.",
  },
];

function EsimFeaturesCard({ page }: { page: string }) {
  return (
    <section
      className={`${styles.section} ${page === "plans" ? styles.margin52 : ""}`}
    >
      <Container>
        <Row>
          {cardsData.map((item, index) => (
            <Col xl={3} sm={6} key={index} className="mb-4">
              <div
                className={`${styles.featureCard} d-flex flex-column justify-content-center align-items-start  gap-2 h-100`}
              >
                <Image
                  src={item.imgPath}
                  height={55}
                  width={55}
                  alt={item.heading}
                />
                <h2 className="font20 fontWeight500 textSecondary">
                  {item.heading}
                </h2>
                <p className="font15 fontWeight400 textMuted">
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default EsimFeaturesCard;
