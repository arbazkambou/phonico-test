"use client";
import { useCart } from "@/Contexts/CartContext";
import { PlanType } from "@/types/PlanTypes";
import { SupportedDeviceType } from "@/types/SupportedDevicesType";
import Image from "next/image";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import CheckCompatibilityModel from "../models/CheckCompatibilityModel";
import styles from "./PlanDetailsCard.module.css";

function PlanDetailsCard({
  plan,
  supportedDevices,
}: {
  plan: PlanType;
  supportedDevices: SupportedDeviceType[];
}) {
  const { addToCart, handleShowCart, cartItems } = useCart();
  const [showModel, setShowModel] = useState(false);

  const listItems = [
    "High-speed internet",
    "Unlimited talk & text",
    "No hotspot data included",
    "High-quality video streaming",
    "No hidden fees",
    "No contract (cancel anytime)",
  ];
  const { data_usable, price, unit, name } = plan;

  return (
    <section className="my-5">
      <Container>
        <Row className="mx-2 mx-sm-0">
          <Col
            xl={5}
            className={`${styles.planDetail}  d-flex flex-column gap-4 mb-4 mb-xl-0`}
          >
            <div className={`d-flex flex-column gap-1 `}>
              <h1 className="fontWeigh600 text-center">
                {data_usable}
                {unit}
              </h1>
              {/* <p className="font16">
                Need for speed? We feel you. Our {data_usable}
                {unit} plan delivers lightning-fast internet so you can
                download, stream, and game without missing a beat.
              </p> */}
            </div>
            <div
              className={`${styles.priceContainer} d-flex flex-column gap-1 py-4`}
            >
              <p className="font30 fontWeight600 text-center">${price}/mo</p>
              <p className="fontWeight500 text-center">{name}</p>
            </div>
            <div className="d-flex flex-column ms-4 gap-3">
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
          </Col>
          <Col
            xl={7}
            className={`${styles.planDuration} py-5 d-flex flex-column gap-4 px-4`}
          >
            <div className="d-flex justify-content-center align-items-center gap-1">
              <button
                className="fontWeight500 textAccent myButton myButtonOutline"
                onClick={() => setShowModel(true)}
              >
                Check if your phone is eSIM compatible
              </button>
            </div>

            {/* plan duration section */}
            {/* <div className="d-flex flex-column gap-3">
              <h2 className="font24 fontWeight500">Select plan duration</h2>
              <Row>
                {planDurations.map((item, index) => (
                  <Col
                    lg={3}
                    sm={6}
                    xs={12}
                    className="mb-3"
                    key={index}
                    // onClick={() => setSelectedPlanId(index)}
                  >
                    <div
                      className={` ${styles.durationCard} ${
                        index === selectedPlanId
                          ? styles.durationCardActive
                          : styles.durationCardInActive
                      } py-2 px-3`}
                    >
                      <p className="font18 ">{item.duration} Month</p>
                      <p className="text-center px-2 mt-2">
                        <span className="font30 fontWeight600 text-center">
                          ${price}
                        </span>
                        /mo
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div> */}

            {/* Whats included section */}
            <div className="d-flex flex-column gap-3">
              <h2 className="font24 fontWeight500">Whats included</h2>
              <div
                className={`${styles.whatsIncluded} px-3 py-3 d-flex align-items-center justify-content-between`}
              >
                <p className="font18">Unlimited SMS & Minutes</p>
                <p className="textAccent font18 fontWeight600">Included</p>
              </div>
            </div>

            {/* cart summary section */}
            <div
              className={`${styles.cartSummary} py-3 px-4 d-flex flex-column justify-content-center gap-4`}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="font18 fontWeight500">Monthly</p>
                  <p className="font18 fontWeight500">${price}/mo</p>
                </div>
                <hr />
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="font18 fontWeight500">Subtotal</p>
                  <p className="font18 fontWeight500">${price} for 1 month</p>
                </div>
                <hr />
              </div>
              {/* <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="font18 fontWeight500">Renews at</p>
                  <p className="font18 fontWeight500">
                    $35/mo ($105 for 3 months)
                  </p>
                </div>
                <hr />
              </div> */}
              <button
                className="myButton myButtonColored textWhite font20 fontWeight500 mx-5"
                onClick={() => {
                  if (cartItems) {
                    return toast.error("You can only add one item to the cart");
                  } else {
                    addToCart({
                      ...plan,
                      duration: 1,
                    });
                    handleShowCart(true);
                    toast.success("Plan successfully added to cart!");
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-5 mt-2">
              <p className="font19 fontWeight300 d-flex align-items-center gap-2">
                <span>
                  <Image
                    src={"/images/clipboard.svg"}
                    height={24}
                    width={24}
                    alt="check icon"
                  />
                </span>
                <span>No Contract Required</span>
              </p>
              <p className="font19 fontWeight300 d-flex align-items-center gap-2">
                <span>
                  <Image
                    src={"/images/crossClipboard.svg"}
                    height={24}
                    width={24}
                    alt="check icon"
                  />
                </span>
                <span>Cancel Anytime</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <CheckCompatibilityModel
        showModel={showModel}
        setShowModel={setShowModel}
        supportedDevices={supportedDevices}
      />
    </section>
  );
}

export default PlanDetailsCard;
