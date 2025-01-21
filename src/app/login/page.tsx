import AuthImage from "@/components/Authentication/AuthImage";
import AuthTabs from "@/components/Authentication/AuthTabs";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Contact us if you have any questions or are concerned about our cheap wireless phone service including 2GB, 5GB, 10GB, and many more. We are here to help you at any time.",
};

function Page() {
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
            <AuthTabs activeTabProp={"login"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Page;
