import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./EsimBenefitsBar.module.css";

function EsimBenifitsBar() {
  return (
    <section className="my-5">
      <Container className={`p-4 ${styles.benefitsBar}`}>
        <Row>
          <Col lg={3} md={12} className="mb-3 mb-lg-0">
            <h2 className="font30 fontWeight500">
              Stay Connected Without Borders
            </h2>
          </Col>
          <Col
            lg={3}
            md={4}
            className="d-flex justify-content-md-center align-items-center gap-3 mb-3 mb-lg-0"
          >
            <Image
              height={68}
              width={68}
              src={"/images/starIcon.svg"}
              alt={"Effortless Coverage"}
            />
            <div className="d-flex flex-column gap-1 font20 fontWeight400">
              <p>Effortless</p>
              <p>Coverage</p>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            className="d-flex justify-content-md-center align-items-center gap-3 mb-3 mb-lg-0"
          >
            <Image
              height={68}
              width={68}
              src={"/images/badgeIcon.svg"}
              alt="Customizable for every journey"
            />
            <div className="d-flex flex-column gap-1 font20 fontWeight400">
              <p>Customizable</p>
              <p>for Every Journey</p>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            className="d-flex justify-content-md-center align-items-center gap-3 mb-3 mb-lg-0"
          >
            <Image
              height={68}
              width={68}
              src={"/images/bulbIcon.svg"}
              alt="Quick digital setup"
            />
            <div className="d-flex flex-column gap-1 font20 fontWeight400">
              <p>Quick Digital Setup </p>
              <p>Plans for Eve</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EsimBenifitsBar;
