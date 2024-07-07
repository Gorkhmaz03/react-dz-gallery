import React from "react";
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="Loader">
      <Rings color="#00BFFF" height={60} width={60} />
    </div>
  );
};

export default Loader;
