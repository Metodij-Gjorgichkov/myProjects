import React from "react";

interface Props {
  title: string;
  type?: "submit";
  width: "w-100" | "w-50";
  height?: "50px" | "38px";
  background?: string;
}
const GoldButton = ({ title, type, width, height, background }: Props) => {
  return (
    <div className="text-center">
      <button
        type={type}
        className={`${width} gold-gradient-1 ${background} footer-radius-border`}
        style={{ height: height }}
      >
        {title}
      </button>
    </div>
  );
};

export default GoldButton;
