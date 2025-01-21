import { PlanType } from "@/types/PlanTypes";
import Image from "next/image";
import Link from "next/link";
import styles from "./PlanCard.module.css";

const planFeatures = [
  "High-speed internet",
  "Unlimited talk & text",
  // "No hotspot data included",
  "High-quality video streaming",
  // "Top-up premium & hotspot data anytime",
  "No hidden fees",
  "No contract (cancel anytime)",
];

function PlanCard({
  bgColor,
  textColor,
  plan,
  title,
  description,
}: {
  bgColor: string;
  textColor: string;
  plan: PlanType;
  title: string;
  description: string;
}) {
  const { data_usable, price, name, id, unit } = plan;
  // const dataQuantity = data_usable / 1024;
  return (
    <div className={`${styles.planCard}`}>
      <h3 className="text-center font30 fontWeight600 py-2">
        {data_usable}
        {unit}
      </h3>

      <div
        className={`${styles.pricing} ${bgColor} ${textColor} d-flex flex-column justify-content-center align-items-center gap-1 py-3`}
      >
        <p className="font24 fontWeight500">${price}/month</p>
        <p className="font14 fontWeight500">{name}</p>
      </div>

      <div className="py-2 d-flex flex-column gap-3">
        <p className="font16 fontWeight500 text-center">{title}</p>
        <p className="font14 fontWeight400 text-center px-1">
          {/* Budget-friendly browsing. {data_usable}
          {unit} gives you the essentials without breaking the bank. */}
          {description}
        </p>
        <div className="d-flex flex-column ms-4 gap-2">
          {planFeatures.map((item, index) => (
            <div className="d-flex  align-items-center gap-2" key={index}>
              <Image
                src={"/images/checkIcon.svg"}
                height={24}
                width={24}
                alt={item}
              />
              <p className="font14 fontWeight400">{item}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Link
            className="myButton myButtonColored textWhite font20 fontWeight500 px-5 py-2"
            href={`/plans/${id}`}
          >
            View Plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
