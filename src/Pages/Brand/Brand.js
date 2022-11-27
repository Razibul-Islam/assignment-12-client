import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBrand from "./SingleBrand";
import BookingModal from "../BookingModal/BookingModal";
import ReportModal from "../BookingModal/ReportModal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../../Loader/Loader";

const Brand = () => {
  const { loading } = useContext(AuthContext);
  const products = useLoaderData();

  const [modalData, setModalData] = useState(null);
  const [reportModalData, setReportModalData] = useState(null);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <SingleBrand
          product={product}
          key={product._id}
          setModalData={setModalData}
          setReportModalData={setReportModalData}
        ></SingleBrand>
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

export default Brand;
