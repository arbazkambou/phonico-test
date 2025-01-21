"use client";

import React, { useState } from "react";
import styles from "./ToggleSwitch.module.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default ToggleSwitch;
