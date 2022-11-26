import React, { useContext, useEffect, useState } from "react";
import Loader from "../../../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleBrand from "../../Brand/SingleBrand";
import MySingleProduct from "./MySingleProduct";

const MyProduct = () => {
  const { user,loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/myProduct?email=${user?.email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setProducts(data));
  }, [user?.email]);
//   console.log(products);
    if (loading) {
        return <Loader></Loader>
    }
      return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-full">
          {products.map((product) => (
            <MySingleProduct key={product._id} product={product}></MySingleProduct>
          ))}
        </div>
      );
};

export default MyProduct;
