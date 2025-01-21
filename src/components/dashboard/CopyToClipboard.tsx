"use client";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface CopyToClipboardProps {
  content: string;
  color?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  content,
  color = "#5740FF",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        cursor: "pointer",
        padding: copied ? "1px" : "0px",
        borderRadius: copied ? "8px" : "0px",
        backgroundColor: copied ? "#d4edda" : "#f8f9fa",
        color: copied ? "#155724" : "#000",
        textAlign: "center",
      }}
    >
      {copied ? <Check size={18} /> : <Copy size={16} color={color} />}
    </div>
  );
};

export default CopyToClipboard;
