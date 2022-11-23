import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1609500537901-91f5b4c900e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">Nokia C3 (2010)</h1>
              <p className="py-3 text-sm max-w-3xl">
                Nokia C3 is young and social, simple and reliable. Messaging and
                social networking are the very heart of this handset. But are
                they enough of a head-turner to become a phone's key selling
                points?
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">
                Samsung Galaxy S21 Ultra 5G
              </h1>
              <p className="py-3 text-sm max-w-3xl">
                This year, the Galaxy S21 series came earlier than expected, and
                it brought a slew of changes. The Galaxy S21 and S21+ now
                feature lower-res OLEDs, no microSD expansion, and no chargers
                in the box.
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://www.gizmochina.com/wp-content/uploads/2022/11/Realme-10-Pro-1024x556.png"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">Realme 10 Pro</h1>
              <p className="py-3 text-sm max-w-3xl">
                The past seven days were marked by the annual Qualcomm summit in
                Hawaii, where the company announced its new flagship chipset
                Snapdragon 8 Gen 2.
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">iPhone 14 Pro Max</h1>
              <p className="py-3 text-sm max-w-3xl">
                The best iPhone ever, version 2022, size XL - we have the iPhone
                14 Pro Max. The list of novelties this year includes the notch
                morphing into a pill, the introduction of an Always-On display,
                and an all-new primary camera
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
