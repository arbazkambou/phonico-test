import { getSimOnLine } from "@/lib/LineApis";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../layout/LoadingSpinner";
import CopyToClipboard from "./CopyToClipboard";
import EsimInstallationGuide from "./EsimInstallationGuide";
import QrCodeGenerator from "./QrCodeGenerator";
import styles from "./ViewSim.module.css";

function ViewSimDetail() {
  const params = useParams<{ id: string }>();
  const { data: simDetail, isLoading: isSimDetailLoading } = useQuery({
    queryKey: ["sim", params.id],
    queryFn: () => getSimOnLine(params.id),
  });

  const simDetailDummy = {
    id: "9d527d89-5ce0-4879-a86e-c9edb9cc0331",
    status: "PROVISIONED",
    user_id: "f7d78e2a-0792-424b-9e52-9f8f78e45388",
    imei: "356656424289576",
    iccid: "8901410321111851072",
    lpa: "LPA:1$T-MOBILE.IDEMIA.IO$DH6RY-XZUHT-T3QDK-YAR0K",
    smdp_address: "T-MOBILE.IDEMIA.IO",
    activation_code: "DH6RY-XZUHT-T3QDK-YAR0K",
  };

  if (isSimDetailLoading) return <LoadingSpinner />;

  const { iccid, lpa, smdp_address, activation_code } = simDetail?.iccid
    ? simDetail
    : simDetailDummy;

  return (
    <Container className="pt-3">
      <Row>
        <Col lg={5} className="mb-4 p-0 p-sm-3">
          <p className="font30 fontWeight500 mb-3">My eSIM</p>
          <div className={`${styles.esimCard} p-3`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <p className="font20 fontWeight500">ICCID</p>
              <div className="d-flex gap-2">
                <span className="font12">{iccid}</span>
                <span>
                  <CopyToClipboard content={iccid} color="#1b1b1b" />
                </span>
              </div>
            </div>
            <hr />

            <div className="d-flex align-items-center justify-content-between gap-5">
              <p className="font20 fontWeight500">SMDP Address</p>
              <div className="d-flex gap-2">
                <span className="font12">{smdp_address}</span>
                <span>
                  <CopyToClipboard content={smdp_address} color="#1b1b1b" />
                </span>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between gap-5">
              <p className="font20 fontWeight500">Activation Code</p>
              <div className="d-flex gap-2">
                <span className="font12">{activation_code} </span>
                <span>
                  <CopyToClipboard content={activation_code} color="#1b1b1b" />
                </span>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between gap-5">
              <p className="font20 fontWeight500">Manual Entry</p>
              <div className="d-flex gap-2">
                <span className="font12">{lpa}</span>
                <span>
                  <CopyToClipboard content={lpa} color="#1b1b1b" />
                </span>
              </div>
            </div>
            <hr />
            <div>
              <p className="font20 fontWeight500">QR Code</p>
              <QrCodeGenerator qrCodeValue={lpa} />
            </div>
          </div>
        </Col>
        <Col lg={7} className="ps-0 ps-sm-5">
          <p className="font30 fontWeight500 mb-3">eSIM Installation guide</p>
          <EsimInstallationGuide />
        </Col>
      </Row>
    </Container>
  );
}

export default ViewSimDetail;
