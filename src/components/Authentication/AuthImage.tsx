import Image from "next/image";
import styles from "./AuthImage.module.css";

function AuthImage() {
  return (
    <div
      className={`${styles.imgContainer} d-flex flex-column justify-content-between`}
    >
      <div>
        <p className="font40 fontWeight900 textWhite text-center">
          Welcome to Phonico
        </p>
        <p className="font20 fontWeight500 textWhite text-center">
          Your Gateway to Effortless eSIM Management.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <p className="font40 fontWeight700 textWhite text-center">
          Seamless Collaboration{" "}
        </p>
        <p className="font20 fontWeight400 textWhite text-center">
          Effortlessly work together with your team in real-time.
        </p>
        <Image
          src={"/images/3dots.svg"}
          height={10}
          width={36}
          alt="3dots"
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  );
}

export default AuthImage;
