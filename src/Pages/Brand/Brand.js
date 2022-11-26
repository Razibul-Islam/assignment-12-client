import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBrand from "./SingleBrand";
import BookingModal from "../BookingModal/BookingModal";

const Brand = () => {

  const products = useLoaderData();

    const [modalData, setModalData] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <SingleBrand
          product={product}
          key={product._id}
          setModalData={setModalData}
        ></SingleBrand>
      ))}



      <div>{modalData && <BookingModal modalData={modalData}></BookingModal>}</div>


      
    </div>
  );
};

export default Brand;
