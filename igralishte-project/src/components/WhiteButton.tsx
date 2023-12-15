import React from "react";

interface Props {
  title: string;
  image?: string;
}

const WhiteButton = ({ title, image }: Props) => {
  return (
    <button className="google-btn inter-font font-weight-500 text-center w-100 py-2 mb-3 footer-radius-border">
      <img src={image} alt={title} className="mr-2" />
      {title}
    </button>
  );
};

export default WhiteButton;
