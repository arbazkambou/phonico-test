"use client";
import React, { useState } from "react";
import styles from "./EsimInstallationGuide.module.css";
import InstallationInstructionCard from "./InstallationInstructionCard";
import Image from "next/image";
import CopyToClipboard from "./CopyToClipboard";

const androidInstallationInstruction = {
  qr: {
    step1: [
      "Step 1:",
      "1. Go to 'Settings', tap 'Network & internet', then tap '(+)' next to the SIMS section. If it's not available, tap 'SIMs' on your device.",
      "2. Tap 'Download a SIM instead?', then tap 'Next'.",
      "3. Tap 'Use a different network' if you need to confirm your network.",
      "4. Scan the QR code, then tap 'Download'.",
      "5. Tap 'Settings' when you see the 'Download Finished' screen.",
    ],

    step2: [
      "Step 2/2 (optional): Only in case your eSIM is not connecting to the tower.",
      "1. Go to 'SIMs', then select the recently downloaded eSIM on your device.",
      "2. Enable the 'Use SIM' toggle, then tap 'Yes'.",
      "3. Enable the 'Mobile data' toggle.",
      "4. Enable the 'Roaming' toggle, then tap 'OK'.",
      "5. Tap the 'Automatically select network' toggle, then choose the supported network available on the eSIM app manually if your eSIM has connected to the wrong network.",
      "6. Tap 'Access Point Names', then tap '(+)'.",
      "7. Enter the APN available on the eSIM app by copying it into the Name and APN fields.",
      "8. Tap the three dots on the top right of the screen, tap 'Save', then select the APN you have saved by clicking the radio button.",
    ],
  },
  manual: {
    step1: [
      "Step 01/02:",
      "1. Go to 'Settings', tap 'Network & internet', then tap '(+)' next to the SIMS section. If it's not available, tap 'SIMs' on your device.",
      "2. Tap 'Download a SIM instead?', then tap 'Next'.",
      "3. Tap 'Use a different network' if you need to confirm your network.",
      "4. Tap 'Need help?', then tap 'Enter it manually'.",
      "5. Enter the Code available on the eSIM app by copying it, tap 'Continue', then tap 'Download'.",
      "6. Tap 'Settings' when you see the 'Download Finished' screen.",
    ],
    step2: [
      "Step 2/2 (optional): Only in case your eSIM is not connecting to the tower.",
      "1. Go to 'SIMs', then select the recently downloaded eSIM on your device.",
      "2. Enable the 'Use SIM' toggle, then tap 'Yes'.",
      "3. Enable the 'Mobile data' toggle.",
      "4. Enable the 'Roaming' toggle, then tap 'OK'.",
      "5. Tap the 'Automatically select network' toggle, then choose the supported network available on the eSIM app manually if your eSIM has connected to the wrong network.",
      "6. Tap 'Access Point Names', then tap '(+)'.",
      "7. Enter the APN available on the eSIM app by copying it into the Name and APN fields.",
      "8. Tap the three dots on the top right of the screen, tap 'Save', then select the APN you have saved by clicking the radio button.",
    ],
  },
};

const iosInstallationInstruction = {
  direct: {
    step1: [
      "Step 1/2:",
      "1. Tap on 'Install ESIM'.",
      "2. Tap on 'Allow' on the dialog box shown asking for confirmation.",
      "3. Follow the on-screen instructions to complete the eSIM download and installation.",
      "4. Choose a label for your new eSIM plan.",
      "5. Choose 'Primary' for your default line, then tap 'Continue'.",
      "6. Choose the 'Primary' you want to use with iMessage and FaceTime for your Apple ID, then tap 'Continue'.",
      "7. Choose your new eSIM plan for cellular/mobile data, then tap 'Continue'.",
    ],
    step2: [
      "Step 2/2 (optional): Only in case your eSIM is not connecting to the tower.",
      "1. Go to 'Cellular/Mobile Data', then select the recently downloaded eSIM on your device. Enable the 'Turn On This Line' toggle, then select your new eSIM plan for cellular/mobile data.",
      "2. Tap 'Network Selection', disable the 'Automatic' toggle, then select the supported network manually if your eSIM has connected to the wrong network.",
      "3. Enable the 'Data Roaming' toggle for your new eSIM plan.",
    ],
  },
  qr: {
    step1: [
      "Step 1/2:",
      "1. On your device, go to Settings.",
      "2. Tap 'Cellular' or 'Mobile'.",
      "3. Tap 'Add Cellular Plan' or 'Add Mobile Data Plan'.",
      "4. Use your printed QR code or another device that displays the QR code to scan your eSIM QR Code.",
      "5. Choose a label or customize a label for your eSIM.",
      "6. Under the Default Line page, select your eSIM for cellular data only.",
      "7. You should see your new eSIM under your 'Cellular Data' or 'Mobile Data Plans'.",
    ],

    step2: [
      "Step 2/2 (optional): Only in case your eSIM is not connecting to the tower.",
      "1. Select your eSIM under 'Cellular Plans'.",
      "2. Ensure that 'Turn On This Line' is toggled on.",
      "3. Go to 'Network Selection' and select the supported network.",
      "4. Go to 'Cellular Data Network' and update the 'APN' field under 'CELLULAR DATA'. The remaining fields should be left blank.",
      "5. Turn on 'Data Roaming'.",
      "6. Need help? Chat with us.",
    ],
  },
  manual: {
    step1: [
      "Step 1/2:",
      "1. Go to Settings > Cellular/Mobile > Add Cellular/Mobile Plan.",
      "2. Tap on 'Enter Details Manually'.",
      "3. Enter your SM-DP+ Address and Activation Code.",
      "4. Tap on 'Add Cellular Plan'.",
      "5. Label the eSIM.",
      "6. Choose your preferred default line to call or send messages.",
      "7. Choose the preferred line to use with iMessage, FaceTime, and Apple ID.",
      "8. Choose the eSIM plan as your default line for Cellular Data and do not turn on 'Allow Cellular Data Switching' to prevent charges on your other line.",
      "9. Your eSIM has been installed successfully, please scroll down.",
    ],

    step2: [
      "Step 2/2 (optional): Only in case your eSIM is not connecting to the tower.",
      "1. Select your eSIM under 'Cellular Plans'.",
      "2. Ensure that 'Turn On This Line' is toggled on.",
      "3. Go to 'Network Selection' and select the supported network.",
      "4. Go to 'Cellular Data Network' and update the 'APN' field under 'CELLULAR DATA'. The remaining fields should be left blank.",
      "5. Turn on 'Data Roaming'.",
      "6. Need help? Chat with us.",
    ],
  },
};

const androidTabs = [
  {
    label: "QR Code",
    content: (
      <>
        <div>
          <InstallationInstructionCard
            installationInstruction={androidInstallationInstruction.qr.step1}
          />
        </div>
        <div className="mt-3">
          <InstallationInstructionCard
            installationInstruction={androidInstallationInstruction.qr.step2}
          />
        </div>
      </>
    ),
  },
  {
    label: "Manual",
    content: (
      <>
        <div className={`${styles.manualCard} p-3 mb-3`}>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-1">
              <Image
                src={"/images/plusIcon.svg"}
                width={20}
                height={20}
                alt="plus icon"
              />
              <p className="font18 textAccent">Manual Entry</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <p className="font18 textAccent">LPA-12938928989384994</p>
              <CopyToClipboard
                content="LPA-12938928989384994"
                color="#ee5e7f"
              />
            </div>
          </div>
          <p className="textMuted mt-2">
            Copy this number and enter detail manually to install your eSIM.
            Make sure you have stable internet connection before installing
          </p>
        </div>
        <div>
          <InstallationInstructionCard
            installationInstruction={
              androidInstallationInstruction.manual.step1
            }
          />
        </div>
        <div className="mt-3">
          <InstallationInstructionCard
            installationInstruction={
              androidInstallationInstruction.manual.step2
            }
          />
        </div>
      </>
    ),
  },
];

const iosTabs = [
  {
    label: "Direct",
    content: (
      <>
        <div>
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.direct.step1}
          />
        </div>
        <div className="mt-3">
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.direct.step2}
          />
        </div>
      </>
    ),
  },
  {
    label: "QR Code",
    content: (
      <>
        <div>
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.qr.step1}
          />
        </div>
        <div className="mt-3">
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.qr.step2}
          />
        </div>
      </>
    ),
  },
  {
    label: "Manual",
    content: (
      <>
        <div className={`${styles.manualCard} p-3 mb-3`}>
          <div className="d-flex align-items-center gap-4 mb-2">
            <div className="d-flex align-items-center gap-1">
              <Image
                src={"/images/plusIcon.svg"}
                width={20}
                height={20}
                alt="plus icon"
              />
              <p className="font18 textAccent">SM-DP+ADDRESS</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <p className="font18 textAccent">SM-DP+ADDRESS</p>
              <CopyToClipboard content="SM-DP+ADDRESS" color="#ee5e7f" />
            </div>
          </div>
          <div className="d-flex align-items-center gap-4 mb-2">
            <div className="d-flex align-items-center gap-1">
              <Image
                src={"/images/plusIcon.svg"}
                width={20}
                height={20}
                alt="plus icon"
              />
              <p className="font18 textAccent">ACTIVATION CODE</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <p className="font18 textAccent">OcakkzfY8D</p>
              <CopyToClipboard content="OcakkzfY8D" color="#ee5e7f" />
            </div>
          </div>
          <p className="textMuted mt-2">
            Copy this number and enter detail manually to install your eSIM.
            Make sure you have stable internet connection before installing
          </p>
        </div>
        <div>
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.manual.step1}
          />
        </div>
        <div className="mt-3">
          <InstallationInstructionCard
            installationInstruction={iosInstallationInstruction.manual.step2}
          />
        </div>
      </>
    ),
  },
];

const EsimInstallationGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAndroidInstallGuide, setIsAndroidInstallGuide] = useState(true);

  return (
    <>
      <div className="my-3 d-flex align-items-center gap-3">
        <button
          className={`myButton ${
            isAndroidInstallGuide
              ? styles.selectedInstallTab
              : styles.installTab
          }`}
          onClick={() => {
            setIsAndroidInstallGuide(true);
            setActiveTab(0);
          }}
        >
          Android Devices
        </button>
        <button
          className={`myButton px-5 ${
            isAndroidInstallGuide
              ? styles.installTab
              : styles.selectedInstallTab
          }`}
          onClick={() => {
            setIsAndroidInstallGuide(false);
            setActiveTab(0);
          }}
        >
          IOS Devices
        </button>
      </div>
      <div className={`${styles.tabSwitcher}`}>
        <div className={`${styles.tabHeaders} mb-3`}>
          {isAndroidInstallGuide
            ? androidTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.tabHeader} ${
                    activeTab === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </div>
              ))
            : iosTabs.map((tab, index) => (
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
        <div>
          {isAndroidInstallGuide
            ? androidTabs[activeTab]?.content
            : iosTabs[activeTab]?.content}
        </div>
      </div>
    </>
  );
};

export default EsimInstallationGuide;
