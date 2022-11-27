import React from "react";
import { RotatingTriangles } from "react-loader-spinner";

const PLoader = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <RotatingTriangles
        visible={true}
        height="300"
        width="300"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default PLoader;
