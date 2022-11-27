import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import AllProduct from "../../Products/AllProduct";

const Category = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category) => (
          <Link
            key={category._id}
            to={`/brand/${category.brand}`}
            className="bg-gray-400 text-6xl font-semibold p-10 text-center rounded-xl cursor-default"
          >
            {category.brand}
          </Link>
        ))}
      </div>
      <div>
        <Link to="/allProduct">
          <h1 className="mt-10 hover:underline hover:text-blue-600 cursor-pointer text-7xl text-center">
            All Products
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Category;
