import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../Loader/Loader";

const AllReport = () => {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allReport");
      const data = await res.json();
      return data;
    },
  });
  // console.log(report);
  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to Delete This Report?");
    if (proceed) {
      fetch(`http://localhost:5000/reports/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            // toast.error("Success Fully Deleted");
            toast.success("delete Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch();
          }
        });
    }
  };

  const handelDeleteProduct = (report) => {
    const proceed = window.confirm(
      `Are you sure, you want to delete report + this product ?`
    );

    if (proceed) {
      fetch(`http://localhost:5000/reports/${report._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            fetch(`http://localhost:5000/products/${report.reportProductId}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  toast.success("report + product delete successFully");
                  refetch();
                }
              });
          }
          // console.log(data)
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Report Message</th>
            <th>Delete Report</th>
            <th>Delete Report Product</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr>
              <td>{report.productName}</td>
              <td>{report.reporter}</td>
              <td>{report.reportmessage}</td>
              <td>
                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-700  text-white py-1 px-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => handelDeleteProduct(report)}
                  className="bg-red-700  text-white py-1 px-2 rounded-lg"
                >
                  Delete Reported Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllReport;
