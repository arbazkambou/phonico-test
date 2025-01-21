import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeltonMini() {
  return (
    <div
      style={{
        width: "100%",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Skeleton width={250} count={2} />
    </div>
  );
}

export default LoadingSkeltonMini;
