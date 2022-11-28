import React from "react";
import Loader from "../../../Loader/Loader";

const Advertise = ({ loading, advertises }) => {
  console.log(advertises);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <marquee className="text-center text-5xl mt-5">
          <span className="mr-10">All Advertise</span>
          <span className="mr-10">All Advertise</span>
          <span className="mr-10">All Advertise</span>
        </marquee>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {advertises.map((ad) => (
          <>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={ad.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ad.name}</h2>
                <p>{ad.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
