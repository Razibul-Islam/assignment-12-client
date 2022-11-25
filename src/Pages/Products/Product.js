import React /*, { useContext } , { useEffect, useState }*/ from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import Samsung from "./Samsung";

const Product = ({ product }) => {
  // console.log(user);
  // const {name:userName,verify,photourl} = user;
  // const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    image,
    name,
    originalPrice,
    resalePrice,
    usingTime,
    shopLocation,
    condition,
    PhoneNumber,
    Brand,
    Time,
    userName,
    verify,
    userImage,
  } = product;
  return (
    <div className="relative mx-auto w-full">
      <a
        href="#"
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        <div className="shadow p-4 rounded-lg bg-white">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="mt-4">
            <h2
              className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
              title="New York"
            >
              {name}
            </h2>
            <p
              className="mt-2 text-sm text-gray-800 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              {shopLocation}
            </p>
            <p
              className="mt-2 text-sm text-gray-800 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              {new Date(Time).toLocaleString()}
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-2">
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Condition:
              <span className="mt-2 xl:mt-0">{condition}</span>
            </p>
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Brand:
              <span className="mt-2 xl:mt-0"> {Brand}</span>
            </p>
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Original Price:
              <span className="mt-2 xl:mt-0 line-through">
                ${originalPrice}
              </span>
            </p>
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Resale Price:$
              <span className="mt-2 xl:mt-0">{resalePrice}</span>
            </p>
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Used Time:
              <span className="mt-2 xl:mt-0">{usingTime} Year</span>
            </p>
            <p className="inline-flex text-sm flex-col xl:flex-row xl:items-center text-gray-800">
              Phone Number:
              <span className="mt-2 xl:mt-0">{PhoneNumber}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center">
              <div className="relative">
                {/* <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div> */}
                <img
                  src={userImage}
                  className="rounded-full w-6 h-6 md:w-8 md:h-8"
                  alt=""
                />
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
              </div>

              <p className="ml-2 text-gray-800 line-clamp-1">{userName}</p>
            </div>

            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                <Link>Report</Link>
              </p>
            </div>
          </div>
          <button className="text-center w-full mt-4 rounded-sm py-3 bg-[#ffbd59]">
            Buy Now
          </button>
        </div>
      </a>
    </div>
  );
};

export default Product;

// <div>{new Date(product.Time).toLocaleString()}</div>
