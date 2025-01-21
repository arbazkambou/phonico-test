import { Container } from "react-bootstrap";
import ReviewCarousel from "./ReviewCarousel";
import styles from "./ClientReviews.module.css";

function ClientReviews() {
  return (
    <section className="my-5">
      <Container className="d-flex flex-column gap-5">
        <div>
          <p className="font16 fontWeight500 textSecondary text-center">
            2,157 people have said how good Phonico
          </p>
          <h2 className="font50 fontWeight500 text-center mt-1">
            The Love We’ve Earned From Our{" "}
            <span className="textAccent">Users</span>
          </h2>
        </div>

        <div className={`${styles.reviewSection}`}>
          <ReviewCarousel />
        </div>
      </Container>
    </section>
  );
}

export default ClientReviews;
