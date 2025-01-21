import { Container } from "react-bootstrap";
import styles from "./SearchNetworkCoverage.module.css";

function SearchNetworkCoverage() {
  return (
    <section className="my-5">
      <Container>
        <div className={`${styles.section} py-5 px-2`}>
          <h2 className="text-center font50 fontWeight500 py-3">
            {/* Fastest Nationwide Coverage{" "}
            <span className="primaryColor">in USA</span> */}
            Full Coverage With the Best Prepaid <br />
            <span className="primaryColor">USA</span> eSIM Plans
          </h2>

          {/* <div
            className="d-flex justify-content-center align-items-center position-relative mt-2"
            style={{ maxWidth: "386px", margin: "auto" }}
          >
            <input className="px-3" placeholder="Enter Your Zip Code" />
            <button
              className="myButton myButtonColored textWhite h-100"
              style={{ position: "absolute", right: "0px" }}
            >
              Search
            </button>
            <div className={`${styles.gradientBox}`}></div>
          </div>
          <p
            className="text-center font20 fontWeight400 mt-3"
            style={{ letterSpacing: "-0.1px", opacity: "0.7" }}
          >
            Check if it’s in your area.
          </p> */}
        </div>
      </Container>
    </section>
  );
}

export default SearchNetworkCoverage;
