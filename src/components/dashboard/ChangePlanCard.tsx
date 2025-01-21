import Image from "next/image";
import Link from "next/link";
import styles from "./ChangePlanCard.module.css";
interface CardDataType {
  title: string;
  pricingTitle: string;
  pricingDescription: string;
  listTitle?: string;
  listDescription?: string;
  listItems: string[];
  buttonLabel: string;
}

function ChangePlanCard({
  cardData,
  bgColor,
  textColor,
}: {
  cardData: CardDataType;
  bgColor: string;
  textColor: string;
}) {
  const {
    title,
    pricingTitle,
    pricingDescription,
    listTitle,
    listDescription,
    listItems,
    buttonLabel,
  } = cardData;
  return (
    <div className={`${styles.planCard}`}>
      <h3 className="text-center font24 fontWeight600 py-2">{title}</h3>

      <div
        className={`${styles.pricing} ${bgColor} ${textColor} d-flex flex-column justify-content-center align-items-center gap-1 py-3`}
      >
        <p className="font24 fontWeight500">{pricingTitle}</p>
        <p className="font16 fontWeight500">{pricingDescription}</p>
      </div>

      <div className="py-2 d-flex flex-column gap-3">
        <p className="font16 fontWeight500 text-center">{listTitle}</p>
        <p className="font14 fontWeight400 text-center">{listDescription}</p>
        <div className="d-flex flex-column ms-4 gap-2">
          {listItems.map((item, index) => (
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
            href={"#"}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChangePlanCard;
