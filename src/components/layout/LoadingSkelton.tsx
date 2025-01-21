import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkelton() {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Skeleton width={350} count={8} />
    </div>
  );
}

export default LoadingSkelton;
