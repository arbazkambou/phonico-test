import { Modal } from "react-bootstrap";
import CheckCompatibility from "../helpers/CheckCompatibility";
import { SupportedDeviceType } from "@/types/SupportedDevicesType";
import styles from "./CheckCompatibilityModel.module.css";
import { CircleX } from "lucide-react";

function CheckCompatibilityModel({
  showModel,
  setShowModel,
  supportedDevices,
}: {
  showModel: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
  supportedDevices: SupportedDeviceType[];
}) {
  return (
    <Modal
      // size="xl"
      dialogClassName={"modal100w"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModel}
      onHide={() => setShowModel(false)}
    >
      <div
        className={`${styles.section} px-4 px-xl-5 py-3 d-flex flex-column gap-3 `}
      >
        <div className="w-100 d-flex justify-content-end">
          {" "}
          <CircleX
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowModel(false)}
          />
        </div>
        <div>
          <p className="font20 fontWeight600 text-center">
            Check Your Device Compatibility
          </p>
          <p className="font10 fontWeight400 textMuted text-center">
            You have two easy options to check your device
          </p>
        </div>
        <div>
          <CheckCompatibility
            supportedDevices={supportedDevices}
            setShowModel={setShowModel}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CheckCompatibilityModel;
