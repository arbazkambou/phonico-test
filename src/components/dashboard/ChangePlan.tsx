import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ChangePlan.module.css";
import ChangePlanCard from "./ChangePlanCard";

function ChangePlan() {
  const plansCardData = [
    {
      title: "Unlimited Data",
      pricingTitle: "$9/month",
      pricingDescription: "$45 upfront payment required",
      listTitle: "Perfect for",
      listDescription:
        "Budget-friendly browsing. 5GB gives you the essentials without breaking the bank.",
      listItems: [
        "High-speed internet",
        "Unlimited talk & text",
        "No hotspot data included",
        "High-quality video streaming",
        "Top-up premium & hotspot data anytime",
        "No hidden fees",
        "No contract (cancel anytime)",
      ],
      buttonLabel: "View Details",
    },
    {
      title: "15GB",
      pricingTitle: "$9/month",
      pricingDescription: "$45 upfront payment required",
      listTitle: "Perfect for",
      listDescription:
        "Budget-friendly browsing. 5GB gives you the essentials without breaking the bank.",
      listItems: [
        "High-speed internet",
        "Unlimited talk & text",
        "No hotspot data included",
        "High-quality video streaming",
        "Top-up premium & hotspot data anytime",
        "No hidden fees",
        "No contract (cancel anytime)",
      ],
      buttonLabel: "View Details",
    },
    {
      title: "5GB",
      pricingTitle: "$9/month",
      pricingDescription: "$45 upfront payment required",
      listTitle: "Perfect for",
      listDescription:
        "Budget-friendly browsing. 5GB gives you the essentials without breaking the bank.",
      listItems: [
        "High-speed internet",
        "Unlimited talk & text",
        "No hotspot data included",
        "High-quality video streaming",
        "Top-up premium & hotspot data anytime",
        "No hidden fees",
        "No contract (cancel anytime)",
      ],
      buttonLabel: "View Details",
    },
    {
      title: "1GB",
      pricingTitle: "$9/month",
      pricingDescription: "$45 upfront payment required",
      listTitle: "Perfect for",
      listDescription:
        "Budget-friendly browsing. 5GB gives you the essentials without breaking the bank.",
      listItems: [
        "High-speed internet",
        "Unlimited talk & text",
        "No hotspot data included",
        "High-quality video streaming",
        "Top-up premium & hotspot data anytime",
        "No hidden fees",
        "No contract (cancel anytime)",
      ],
      buttonLabel: "View Details",
    },
  ];
  return (
    <Container className="pt-4">
      <div className={`${styles.planNote} p-2 mx-4 mb-3`}>
        <div className="d-flex align-items-center gap-2">
          <Image
            src={"/images/warningIcon2.svg"}
            height={38}
            width={38}
            alt="warning icon"
          />
          <p>
            Note: Usable data will be reduced to number of days(24) remaining
            till next billing date(24 Mar 2024). After the billing date you will
            have usable data on the plan for next month.
          </p>
        </div>
      </div>
      <div className={`${styles.planNote} p-2 mx-4 mb-3`}>
        <div className="d-flex align-items-center gap-2">
          <Image
            src={"/images/warningIcon2.svg"}
            height={38}
            width={38}
            alt="warning icon"
          />
          <p>
            Note: Usable data will be reduced to number of days(24) remaining
            till next billing date(24 Mar 2024). After the billing date you will
            have usable data on the plan for next month.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Row>
          {plansCardData.map((item, index) => (
            <Col xl={3} lg={6} key={index} className="mb-4">
              <ChangePlanCard
                cardData={item}
                bgColor={index > 0 ? "bgBlue" : "bgPink"}
                textColor={index > 0 ? "textPrimary" : "textWhite"}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ChangePlan;
