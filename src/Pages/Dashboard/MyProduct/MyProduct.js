import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import SingleBrand from "../../Brand/SingleBrand";
import MySingleProduct from "./MySingleProduct";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  // const [products, setProducts] = useState([]);

  const url = `http://localhost:5000/dashboard/myProduct?email=${user?.email}`;

  const {
    data: myProduct = [],
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

  // const {
  //   data: users,
  // } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/user`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-full">
      {myProduct.map((product) => (
        <MySingleProduct
          key={product._id}
          product={product}
          refetch={refetch}
        ></MySingleProduct>
      ))}
      {/* {users.map((product) => (
        <MySingleProduct
          key={product._id}
          product={product}
        ></MySingleProduct>
      ))} */}
    </div>
  );
};

export default MyProduct;
