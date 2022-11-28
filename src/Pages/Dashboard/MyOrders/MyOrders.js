import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const {
    data: myOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure? You want to Remove This Order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
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
    <div>
      {myOrders.length > 0 ? (
        <>
          <h1 className="text-4xl">MY ORDERS</h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Payment</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrders.map((order, i) => (
                    <tr className="hover">
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={order.productImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{order.productName}</td>
                      <td>{order.resalePrice}</td>
                      <td>
                        {order.resalePrice && !order.paid && (
                          <Link to={`/dashboard/payment/${order._id}`}>
                            <button className="bg-[#ffbd59] border-none py-1 rounded-xl px-2">
                              Pay Now
                            </button>
                          </Link>
                        )}
                        {order.resalePrice && order.paid && (
                          <button className="bg-[#ffbd59] border-none py-1 rounded-xl px-2">
                            Paid
                          </button>
                        )}

                        {/* <button className="bg-[#ffbd59] border-none py-1 rounded-xl px-2">
                          Pay Now
                        </button> */}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="bg-red-600 border-none py-1 rounded-md px-2 text-white"
                        >
                          Remove Order
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl">
            You have no Order..{" "}
            <Link
              to="/allProduct"
              className="text-[#ffbd59] hover:underline cursor-pointer"
            >
              Order Now!
            </Link>
          </h1>
        </>
      )}
    </div>
  );
};

export default MyOrders;
