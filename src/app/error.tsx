"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import styles from "./error.module.css";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className={`${styles.section}`}>
      <Row>
        <Col xl={6} className="mb-5 ps-1 ps-xl-4">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-3">
              <h1 className="font50 fontWeight900">Oops!</h1>
              <h2>Something Went Wrong</h2>
              <p>
                We encountered an issue. Refresh the page or return to the
                homepage.
              </p>
            </div>
            <div>
              <Link href={"/"}>Go back to Home page</Link>
            </div>
          </div>
        </Col>
        <Col xl={6}>
          <div className={`${styles.imageWrapper}`}>
            <Image
              src={"/images/errorImage.png"}
              alt="error image"
              fill
              objectFit="contain"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
