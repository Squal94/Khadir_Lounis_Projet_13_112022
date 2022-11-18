// import React, { useEffect, useState } from "react";
import featureData from "../Assets/Data/featureData";
import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <div className="featureContainer">
      {featureData.map((item) => (
        <FeatureItem props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Feature;
