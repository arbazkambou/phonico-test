import { Col, Container, Row } from "react-bootstrap";
import styles from "./EsimSteps.module.css";
function EsimSteps() {
  return (
    <section className="my-5">
      <Container className={`${styles.section} my-5`}>
        <h2 className="font50 fontWeight500">
          You can get your <span className="textAccent">Phonico</span> <br />{" "}
          eSIM in 3 easy steps!
        </h2>
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <div
              className={`${styles.steps} ${styles.step1} d-flex flex-column gap-1 `}
            >
              <h2 className="font24 fontWeight600">
                <span className="d-inline d-xxl-none">1. </span>Choose Your Plan
              </h2>
              <p className="font20 fontWeight500 textMuted">
                Select the best eSIM plan that meets your needs.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div
              className={`${styles.steps} ${styles.step2} d-flex flex-column gap-1 `}
            >
              <h2 className="font24 fontWeight600">
                <span className="d-inline d-xxl-none">2. </span>Buy Your eSIM
                Online
              </h2>
              <p className="font20 fontWeight500 textMuted">
                You can buy your eSIM online, and it’s ready to use in minutes.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div
              className={`${styles.steps} ${styles.step3} d-flex flex-column gap-1 `}
            >
              <h2 className="font24 fontWeight600">
                <span className="d-inline d-xxl-none">3. </span>Active Instantly
              </h2>
              <p className="font20 fontWeight500 textMuted">
                There is no wait, and there is no paperwork. Just click buy now,
                and you will receive a QR code in your e-mail for activation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EsimSteps;
