import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../Loader/Loader";
import User from "./User";

const Buyer = () => {
  const buyerUrl = "http://localhost:5000/allUsers/Buyer";

  const {
    data: buyer,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch(buyerUrl);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
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

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verify</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {buyer.map((user) => (
            <User key={user._id} user={user} handleDelete={handleDelete}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buyer;
