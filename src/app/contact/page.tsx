import { Metadata } from "next";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";

export const revalidate = 300;

export const metadata: Metadata = {
  title:
    "Phonico | Contact Us | Best Cell Phone Coverage in the United States | Phonico",
  description:
    "Contact us if you have any questions or are concerned about our cheap wireless phone service including 2GB, 5GB, 10GB, and many more. We are here to help you at any time.",
};

export default function Plans() {
  return (
    <>
      <section>
        <Container
          className={`${styles.headSection} d-flex flex-column align-items-center justify-content-center gap-3`}
        >
          <div>
            <span
              className="p-2 rounded-4 font14 fontWeight500"
              style={{ background: "rgba(238, 94, 127, 0.13)" }}
            >
              Contact us
            </span>
          </div>

          <h1 className="font50 fontWeight600">
            We’d Love to Hear from <span className="textAccent">You!</span>
          </h1>
          <p className="font20">Experience seamless connectivity with eSIM</p>
        </Container>

        <Container className="my-5">
          <Row>
            <Col lg={6} className={`mb-5`}>
              <div className={`${styles.imgWrapper}`}>
                <Image
                  src={"/images/contactUsImg.png"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Contact us image"
                  loading="eager"
                  priority={true}
                  quality={90}
                />
              </div>
            </Col>
            <Col lg={6} className="px-4">
              <h2 className="font40 fontWeight500">Contact Us Now!</h2>
              <p className="font20 fontWeight500 textMuted mt-2">
                You can reach us anytime via{" "}
                <a href="mailto:support@phonico.com" className="textAccent">
                  support@phonico.com
                </a>
              </p>
              <form action="" className="mt-5 d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-1">
                  <label htmlFor="name" className={`${styles.label}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`myInput myInputGrey`}
                    placeholder="Your name"
                  />
                </div>

                <div className="d-flex flex-column gap-1">
                  <label htmlFor="email" className={`${styles.label}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="emaiil"
                    id="email"
                    className={`myInput myInputGrey`}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="d-flex flex-column gap-1">
                  <label htmlFor="phone" className={`${styles.label}`}>
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="phone"
                    className={`myInput myInputGrey`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="d-flex flex-column gap-1">
                  <label htmlFor="message" className={`${styles.label}`}>
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className={`myInput myInput`}
                    placeholder="Tell us a little about the Concern..."
                    rows={5}
                  />
                </div>

                {/* <div>
                  <p className="fontWeight500">Services</p>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="esim"
                      />
                      <label htmlFor="esim" className={`${styles.label}`}>
                        eSIM
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="content"
                      />
                      <label htmlFor="content" className={`${styles.label}`}>
                        Content creation
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="design"
                      />
                      <label htmlFor="design" className={`${styles.label}`}>
                        eSIM design
                      </label>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="strategy"
                      />
                      <label htmlFor="strategy" className={`${styles.label}`}>
                        Strategy & consulting
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="research"
                      />
                      <label htmlFor="research" className={`${styles.label}`}>
                        User research
                      </label>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className={`${styles.checkBox}`}
                        id="other"
                      />
                      <label htmlFor="other" className={`${styles.label}`}>
                        other
                      </label>
                    </div>
                  </div>
                </div> */}

                <button className="myButton myButtonOutline mt-1" type="submit">
                  Get started
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="d-flex align-items-center h-100">
              <div>
                <p className="mb-0">
                  Let&apos;s talk about your Business, fill the form and{" "}
                </p>
                <h3>Reach Us!</h3>
                <form className="mt-4">
                  <input
                    className={styles.pinkInput}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                  <input
                    className={styles.pinkInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    className={styles.pinkInput}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <textarea
                    className={styles.pinkInput}
                    name="msg"
                    rows={5}
                    placeholder="Message"
                  ></textarea>
                  <button className="my_btn my_btn_black mx-auto d-block">
                    <strong>
                      Send <FontAwesomeIcon icon={faArrowRight} />
                    </strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <Image
                className="img-fluid"
                src={"/images/pages/calldirect-07.webp"}
                alt="mascot"
                width={570}
                height={570}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
