import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Loader;
