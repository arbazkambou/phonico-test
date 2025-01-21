import { getAllLines } from "@/lib/LineApis";
import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "react-bootstrap";
import EsimDetailCard from "./EsimDetailCard";
import styles from "./MyEsims.module.css";
import LoadingSpinner from "../layout/LoadingSpinner";

function MyEsims() {
  const { data: lines = [], isLoading: isLinesLoading } = useQuery({
    queryKey: ["lines"],
    queryFn: getAllLines,
  });

  if (isLinesLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className={`${styles.myEsims} pt-4 px-2 pt-sm-4 px-sm-4`}>
        <p className="font30 fontWeight500 mb-3 mt-4 mt-sm-0">
          Choose Your Line{" "}
        </p>
        <Row>
          {lines.map((line, index) => (
            <Col key={index} xl={6} className="mb-5">
              <EsimDetailCard line={line} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default MyEsims;
