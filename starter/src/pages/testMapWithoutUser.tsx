import MapWithoutAccount from "@/components/MapWithoutAccount";
import dynamic from "next/dynamic";
import React from "react";

const DynamicMap = dynamic(() => import("../components/MapWithoutAccount"), {
  ssr: false,
});

const testMapWithoutUser = () => {
  return (
    <div>
      <DynamicMap />
    </div>
  );
};

export default testMapWithoutUser;
