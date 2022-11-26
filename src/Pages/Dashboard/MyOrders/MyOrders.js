import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
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
                      <button className="bg-[#ffbd59] py-1 rounded-xl px-2">
                        Pay Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyOrders;
