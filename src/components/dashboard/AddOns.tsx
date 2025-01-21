import { Col, Container, Row } from "react-bootstrap";
import AddOnsCard from "./AddOnsCard";
import AddOnsHistory from "./AddOnsHistory";
import { useQuery } from "@tanstack/react-query";
import { getAddonsHistory, getApplicableAddons } from "@/lib/AddonsApis";
import LoadingSpinner from "../layout/LoadingSpinner";
import { useParams } from "next/navigation";

function AddOns() {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["applicableAddons"],
    queryFn: getApplicableAddons,
  });

  const {
    data: addonsHistroy,
    isLoading: isAddonsHistoryLoading,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["addonsHistory"],
    queryFn: () => getAddonsHistory(params.id),
  });

  function handleRefresh() {
    refetch();
  }
  if (isLoading || isAddonsHistoryLoading) return <LoadingSpinner />;

  return (
    <Container className="pt-4">
      {/* <div className={`${styles.planNote} p-2 mx-4`}>
        <div className="d-flex align-items-center gap-2">
          <Image
            src={"/images/warningIcon2.svg"}
            height={38}
            width={38}
            alt="warning icon"
          />
          <p>
            Note: Addons will be usable until next billiing date (28 Jun 2024 -
            12:28 PM)
          </p>
        </div>
      </div> */}

      <div className="mt-4">
        <Row>
          {data!.map((addon, index) => (
            <Col xl={3} lg={6} key={index} className="mb-4">
              <AddOnsCard
                bgColor={index > 0 ? "bgBlue" : "bgPink"}
                textColor={index > 0 ? "textPrimary" : "textWhite"}
                addon={addon}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="mt-4">
        <AddOnsHistory
          addonsHistory={addonsHistroy!}
          handleRefresh={handleRefresh}
          isAddonsHistoryLoading={isFetching}
        />
      </div>
    </Container>
  );
}

export default AddOns;
