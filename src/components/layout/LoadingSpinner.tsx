import { GridLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div
      className={`${styles.spinnerContainer} d-flex justify-content-center align-items-center`}
    >
      <GridLoader color="#ee5e7f" />
    </div>
  );
}

export default LoadingSpinner;
