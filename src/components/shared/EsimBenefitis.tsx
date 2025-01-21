import { Col, Container, Row } from "react-bootstrap";
import styles from "./EsimBeneifits.module.css";
import Image from "next/image";

interface EsimBeneifitsPropsType {
  title: React.ReactNode;
  description: React.ReactNode;
  imgSrc: string;
}

function EsimBenefitis({ data }: { data: EsimBeneifitsPropsType }) {
  return (
    <section className="my-5">
      <Container className={`${styles.section}`}>
        <Row>
          <Col lg={6} className="d-flex flex-column gap-4 mb-3">
            <h2 className="font50 fontWeight500">{data.title}</h2>
            <p className="font20 fontWeight400 textSecondary">
              {data.description}
            </p>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div
              className={`${styles.imgWrapper} d-flex align-items-center justify-content-end`}
            >
              <Image
                src={data.imgSrc}
                fill
                alt="Phonico eSIM benefits"
                style={{ objectFit: "contain" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EsimBenefitis;
