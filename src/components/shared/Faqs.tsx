"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import styles from "./Faqs.module.css";

interface faqPropsType {
  eventKey: string;
  question: string;
  body: string;
  listItems?: string[];
}
function Faqs({ data }: { data: faqPropsType[] }) {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const toggleAccordion = (key: string) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };

  return (
    <section className={`my-5 ${styles.section} py-5`}>
      <Container className={`py-4`}>
        <h2 className="font50 fontWeight500 text-center">
          Frequently Asked <span className="textAccent">Questions</span>
        </h2>
        <p className="font20 textSecondary text-center mt-2">
          Curious About Our Services?
        </p>
        <Row className="mt-5">
          {data.map((item, index) => (
            <Col md={6} key={index} className="mb-4">
              <Accordion>
                <Card className={`${styles.accordion}`}>
                  <Card.Header
                    className={`${
                      activeKeys.includes(item.eventKey)
                        ? styles.accordionHeaderActice
                        : styles.accordionHeaderInActive
                    }`}
                  >
                    <CustomToggle eventKey={item.eventKey}>
                      <div
                        onClick={() => toggleAccordion(item.eventKey)}
                        className="d-flex justify-content-between align-items-center w-100"
                      >
                        <div className="d-flex align-items-center justify-content-start gap-3">
                          <span
                            className={`${
                              activeKeys.includes(item.eventKey)
                                ? styles.accordionActive
                                : styles.accordionInActive
                            } font50 text-start`}
                          >
                            {index + 1}
                          </span>
                          <span
                            className={`${
                              activeKeys.includes(item.eventKey)
                                ? styles.verticalBarActive
                                : styles.verticalBarInActive
                            }`}
                          ></span>
                          <h3
                            className={`font16 fontWeight500 textBlue ${
                              activeKeys.includes(item.eventKey)
                                ? "fontWeight600"
                                : "fontWeight500"
                            }`}
                          >
                            {item.question}
                          </h3>
                        </div>
                        <div>
                          {activeKeys.includes(item.eventKey) ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>
                      </div>
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={item.eventKey}>
                    <Card.Body className="px-5 font16 textBlue">
                      <p>{item.body}</p>
                      {item.listItems && (
                        <ol className="mt-1">
                          {item.listItems.map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                          ))}
                        </ol>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function CustomToggle({
  children,
  eventKey,
}: {
  children: React.ReactNode;
  eventKey: string;
}) {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className={`${styles.accordionButton} w-100`}
    >
      {children}
    </button>
  );
}

export default Faqs;
