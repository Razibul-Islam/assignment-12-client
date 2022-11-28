import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../../Loader/Loader";
import BookingModal from "../BookingModal/BookingModal";
import ReportModal from "../BookingModal/ReportModal";
// import BookingModal from "../BookingModal/BookingModal";
import SingleBrand from "../Brand/SingleBrand";
// import Product from "./Product";

const AllProduct = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://classic-server.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });
  // const { data: user } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://classic-server.vercel.app/users/verify/${user}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // console.log(user);
  const [modalData, setModalData] = useState(null);
  const [reportModalData, setReportModalData] = useState(null);

  if (isLoading) {
    return <Loader></Loader>;
  }
  // console.log(product.length);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {products.map((product) => (
        <SingleBrand
          setModalData={setModalData}
          setReportModalData={setReportModalData}
          key={product._id}
          product={product}
        ></SingleBrand>
        // <Product key={product._id} product={product}></Product>
      ))}

      <div>
        {modalData && (
          <BookingModal
            modalData={modalData}
            setModalData={setModalData}
          ></BookingModal>
        )}
      </div>
      <div>
        {reportModalData && (
          <ReportModal
            reportModalData={reportModalData}
            setReportModalData={setReportModalData}
          ></ReportModal>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
