import AuthImage from "@/components/Authentication/AuthImage";
import AuthTabs from "@/components/Authentication/AuthTabs";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Register",
};

function page() {
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col
            lg={{ span: 6, order: 0 }}
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            className="mb-5"
          >
            <AuthImage />
          </Col>
          <Col lg={6} className="my-lg-5 px-lg-5 mb-5">
            <AuthTabs activeTabProp={"register"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default page;
