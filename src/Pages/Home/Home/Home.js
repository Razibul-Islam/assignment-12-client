import axios from "axios";
import React, { useEffect, useState } from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [advertises, setData] = useState([]);

  // fetch by axios

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://classic-server.vercel.app/myAdvertise/true"
      );
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  //   console.log(advertises);

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      {/* <Advertise loading={loading} advertises={advertises}></Advertise> */}
      {advertises?.length > 0 && (
        <Advertise advertises={advertises} loading={loading}></Advertise>
      )}
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
