import Image from "next/image";

function OrLine() {
  return (
    <div className="d-flex justify-content-center">
      <Image height={20} width={180} src={"/images/or.svg"} alt="or line" />
    </div>
  );
}

export default OrLine;
