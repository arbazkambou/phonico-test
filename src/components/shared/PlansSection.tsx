import { Col, Container, Row } from "react-bootstrap";
import styles from "./PlansSection.module.css";
import PlanCard from "./PlanCard";
import { getPlans } from "@/lib/PlanApis";

const plansText = {
  titles: [
    "Quick Start Plan",
    "Traveler’s Choice Plan",
    "Business Boost Plan",
    "Explorer’s Dream Plan",
    "Premium Plan",
    "Quick Start Plan",
    "Traveler’s Choice Plan",
    "Business Boost Plan",
    "Explorer’s Dream Plan",
    "Premium Plan",
    "Traveler’s Choice Plan",
    "Business Boost Plan",
    "Explorer’s Dream Plan",
    "Premium Plan",
  ],

  descriptions: [
    "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
    "Planning another adventure trip? Don’t Forget to buy the best eSIM Plan for Staying Connected.",
    "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
    "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
    "Going to Sign Deals with the Staff On-Board with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
    "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
    "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
    "Going to Sign Deals with the Staff On-Board with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
    "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
    "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
    "Going to Sign Deals with the Staff On-Board with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
  ],
};
async function PlansSection() {
  const plans = await getPlans();

  return (
    <section className="mt-3 mb-5">
      <Container className={`${styles.section}`} fluid={"xxl"}>
        <h2 className="font50 text-center pt-5 fontWeight500">
          Buy the Best eSIM Prepaid Plans Meeting All Your{" "}
          <span className="primaryColor">Expectations! </span>
        </h2>
        <div className="mt-5">
          <Row className="justify-content-center">
            {plans.data.map((plan, index) => (
              <Col xl={3} lg={6} key={index} className="mb-5">
                <PlanCard
                  plan={plan}
                  bgColor={index > 0 ? "bgBlue" : "bgPink"}
                  textColor={index > 0 ? "textPrimary" : "textWhite"}
                  title={plansText.titles[index]}
                  description={plansText.descriptions[index]}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default PlansSection;
