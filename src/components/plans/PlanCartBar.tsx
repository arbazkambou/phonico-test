"use client";

import React from "react";
import styles from "./PlanCartBar.module.css";
import { useCart } from "@/Contexts/CartContext";

const PlanCartBar: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  let data;
  let minutes;
  let sms;
  if (cartItems) {
    data = cartItems.data_usable / 1024;
    minutes = cartItems.minutes_usable;
    sms = cartItems.sms_usable;
  }

  return cartItems ? (
    <div className={styles.planCartBar}>
      <div className={styles.planDetails}>
        <h4>${cartItems.price}</h4>
        <p>{`${data} GB data, ${minutes} minutes and ${sms} sms Monthly`}</p>
        <p></p>
      </div>
      <div className="d-flex justify-content-center gap-4">
        <button onClick={clearCart} className="my_btn my_btn_black">
          Clear
        </button>
        <button className={"my_btn my_btn_colored"}>Buy Now</button>
      </div>
    </div>
  ) : null;
};

export default PlanCartBar;
