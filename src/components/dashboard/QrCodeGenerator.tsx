import { Save, Share2 } from "lucide-react";
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import styles from "./QrCodeGenerator.module.css";
import toast from "react-hot-toast";

interface QrCodeGeneratorProps {
  qrCodeValue: string;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ qrCodeValue }) => {
  const svgRef = useRef<HTMLDivElement>(null);

  const downloadQrCode = () => {
    if (!svgRef.current) return;

    const svg = svgRef.current.querySelector("svg.qr-code-svg");
    if (!svg) {
      toast.error("QR Code could not be found.");
      return;
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const encodedData = encodeURIComponent(svgString);
    const base64Data = btoa(unescape(encodedData));

    const downloadLink = document.createElement("a");
    downloadLink.href = `data:image/svg+xml;base64,${base64Data}`;
    downloadLink.download = "qrcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const shareQrCode = async () => {
    if (!navigator.share) {
      toast.error("Sharing is not supported on this browser.");
      return;
    }

    if (!svgRef.current) {
      toast.error("QR Code could not be found.");
      return;
    }

    const svg = svgRef.current.querySelector("svg.qr-code-svg");
    if (!svg) {
      toast.error("QR Code could not be found.");
      return;
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const file = new File([blob], "qrcode.svg", { type: "image/svg+xml" });

    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "QR Code",
          text: "Here is the QR code.",
          files: [file],
        });
      } else {
        toast.error("Sharing files is not supported on this device.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("An error occurred while sharing.");
    }
  };

  const fallbackDownload = () => {
    downloadQrCode();
    toast.error("Sharing not supported. QR Code has been downloaded instead.");
  };

  return (
    <div>
      {qrCodeValue ? (
        <div className="d-flex gap-4 flex-row align-items-center justify-content-between w-100 mt-1">
          <div className="d-flex flex-column gap-3 align-self-end">
            <div
              onClick={downloadQrCode}
              className={`${styles.btnStyle} d-flex align-items-center justify-content-between p-1`}
            >
              <p>Save QR Code</p>
              <Save size={18} />
            </div>

            <div
              onClick={() => shareQrCode().catch(fallbackDownload)}
              className={`${styles.btnStyle} d-flex align-items-center justify-content-between gap-1 p-1`}
            >
              <p>Share QR Code</p>
              <Share2 size={18} />
            </div>
          </div>
          <div ref={svgRef}>
            {/* Add a unique class to the QR code SVG */}
            <QRCode value={qrCodeValue} size={120} className="qr-code-svg" />
          </div>
        </div>
      ) : (
        <p>Generating QR code...</p>
      )}
    </div>
  );
};

export default QrCodeGenerator;
