import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  fillColor?: string;
  backgroundColor?: string;
  height?: string;
  showLabel?: boolean;
  labelColor?: string;
}

const CustomProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  fillColor = "#007bff",
  backgroundColor = "#e9ecef",
  height = "6px",
  showLabel = false,
  labelColor = "#fff",
}) => {
  const progress = Math.min(Math.max(value, 0), max); // Ensure value is within bounds

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        borderRadius: "4px",
        overflow: "hidden",
        height,
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${(progress / max) * 100}%`,
          backgroundColor: fillColor,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {showLabel && (
          <span
            style={{
              color: labelColor,
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {`${Math.round((progress / max) * 100)}%`}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomProgressBar;
