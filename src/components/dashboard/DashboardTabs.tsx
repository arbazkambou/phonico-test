"use client";
import React, { useState } from "react";
import AddOns from "./AddOns";
// import ChangePlan from "./ChangePlan";
import styles from "./DashboardTabs.module.css";
import ManageSubscriptions from "./ManageSubscriptions";
import SimSwap from "./SimSwap";
import ViewSimDetail from "./ViewSimDetail";

interface Tab {
  label: string;
  content: React.ReactNode;
}

function DashboardTabs() {
  const tabs: Tab[] = [
    { label: "View Sim", content: <ViewSimDetail /> },
    // { label: "Change Plan", content: <ChangePlan /> },
    // { label: "Swap Your Sim", content: <MyEsims /> },
    { label: "Swap Sim", content: <SimSwap /> },
    { label: "Add ons", content: <AddOns /> },
    {
      label: "Subscriptions",
      content: <ManageSubscriptions />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`${styles.tabSwitcher}`}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tabHeader} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
}

export default DashboardTabs;
