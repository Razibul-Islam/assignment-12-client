import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../Loader/Loader";
import BookingModal from "../BookingModal/BookingModal";
// import BookingModal from "../BookingModal/BookingModal";
import SingleBrand from "../Brand/SingleBrand";
// import Product from "./Product";

const AllProduct = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  const [modalData, setModalData] = useState(null);

  if (isLoading) {
    return <Loader></Loader>;
  }
  // console.log(product.length);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {products.map((product) => (
        <SingleBrand
          setModalData={setModalData}
          key={product._id}
          product={product}
        ></SingleBrand>
        // <Product key={product._id} product={product}></Product>
      ))}

      <div>
        {modalData && <BookingModal modalData={modalData}></BookingModal>}
      </div>
    </div>
  );
};

export default AllProduct;
