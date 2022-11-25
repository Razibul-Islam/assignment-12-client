import React from "react";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-gray-400 text-6xl font-semibold p-10 text-center rounded-xl cursor-default">
          Samsung
        </div>
        <div className="bg-gray-400 text-6xl font-semibold p-10 text-center rounded-xl cursor-default">
          Apple
        </div>
        <div className="bg-gray-400 text-6xl font-semibold p-10 text-center rounded-xl cursor-default">
          Nokia
        </div>
        <div className="bg-gray-400 text-6xl font-semibold p-10 text-center rounded-xl cursor-default">
          Realme
        </div>
      </div>
    </div>
  );
};

export default Category;
