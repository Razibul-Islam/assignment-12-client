import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Advertise = ({ loading, advertises }) => {
  // console.log(advertises);

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
      {/* <div className="grid grid-cols-3 gap-10">
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
                  <Link to="allproduct" className="btn btn-primary">
                    Show all
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {advertises.map((ad) => (
          <SwiperSlide>
            <div className="card bg-base-100 h-96 shadow-xl image-full">
              <figure>
                <img src={ad.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ad.name}</h2>
                <p>{ad.description}</p>
                <div className="card-actions justify-end">
                  <Link to="allproduct" className="btn btn-primary">
                    Show all
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Advertise;
