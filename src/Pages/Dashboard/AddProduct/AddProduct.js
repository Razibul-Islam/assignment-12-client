import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Loader from "../../../Loader/Loader";
// import Loader from "../../../Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ImageHostKey = process.env.REACT_APP_imgbb_key;
  const date = Date.now();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  // const [isLoading, setIsLoading] = useState()

  const handleAddProduct = (data) => {
    // console.log(data);
    const image = data.url[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log('img', imgData);

        if (imgData.success) {
          const product = {
            image: imgData.data.url,
            name: data.name,
            originalPrice: data.originalPrice,
            resalePrice: data.resale,
            usingTime: data.usingTime,
            shopLocation: data.location,
            condition: data.select,
            PhoneNumber: data.number,
            Brand: data.brand,
            Time: date,
            userName: user.displayName,
            verify: false,
            userImage: user.photoURL,
            userEmail: user.email,
            description: data.description,
            purchase: data.purchase,
          };
          //   console.log(product);
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success(`Your Product is successfully added!`);
              navigate("/dashboard/myProduct");
            });
        }
      });
  };

  return (
    <section className="flex justify-center items-center py-5">
      <div className="w-full">
        <form
          className="max-w-xl mx-auto"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="sellerName" className="block dark:text-gray-400">
              Seller Name
            </label>
            <input
              type="text"
              {...register("sellerName")}
              name="sellerName"
              id="sellerName"
              defaultValue={user?.displayName}
              readOnly
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm mt-5">
            <label htmlFor="name" className="block dark:text-gray-400">
              Product Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Product Name is required",
              })}
              name="name"
              id="name"
              placeholder="Product Name"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="brand" className="block dark:text-gray-400">
              Select Brand
            </label>
            <select
              {...register("brand", {
                required: "Please Select your brand",
              })}
              id="brand"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              // required
            >
              <option value={""} disabled hidden selected>
                Please Select your brand
              </option>
              <option value="Iphone">Iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Nokia">Nokia</option>
              <option value="Realme">Realme</option>
            </select>
            {errors.brand && (
              <p className="text-red-600" role="alert">
                {errors.brand?.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="originalPrice"
                className="block dark:text-gray-400"
              >
                Original Price
              </label>
              <input
                type="text"
                {...register("originalPrice", {
                  required: "original Price is required",
                })}
                name="originalPrice"
                id="originalPrice"
                placeholder="Original Price"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.originalPrice && (
                <p className="text-red-600" role="alert">
                  {errors.originalPrice?.message}
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="resale" className="block dark:text-gray-400">
                Resale Price
              </label>
              <input
                type="text"
                {...register("resale", {
                  required: "Resale is required",
                })}
                name="resale"
                id="resale"
                placeholder="Resale Price"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.resale && (
                <p className="text-red-600" role="alert">
                  {errors.resale?.message}
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="purchase" className="block dark:text-gray-400">
                Year of Purchase
              </label>
              <input
                type="month"
                {...register("purchase", {
                  required: "Purchase year is required",
                })}
                name="purchase"
                id="purchase"
                placeholder="Year of Purchase"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.purchase && (
                <p className="text-red-600" role="alert">
                  {errors.purchase?.message}
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="usingTime" className="block dark:text-gray-400">
                Using Time
              </label>
              <input
                type="text"
                {...register("usingTime", {
                  required: "Using Time is required",
                })}
                name="usingTime"
                id="usingTime"
                placeholder="Using Time"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.usingTime && (
                <p className="text-red-600" role="alert">
                  {errors.usingTime?.message}
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block dark:text-gray-400">
                Shop Location
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Shop Location is required",
                })}
                name="location"
                id="location"
                placeholder="Shop Location"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.location && (
                <p className="text-red-600" role="alert">
                  {errors.location?.message}
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="number" className="block dark:text-gray-400">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("number", {
                  required: "Phone Number is required",
                })}
                name="number"
                id="number"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              />
              {errors.number && (
                <p className="text-red-600" role="alert">
                  {errors.number?.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="condition" className="block dark:text-gray-400">
              Select condition
            </label>
            <select
              {...register("select", {
                required: "Please Select One",
              })}
              id="condition"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              // required
            >
              <option value={""} disabled hidden selected>
                Select One
              </option>
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
            {errors.select && (
              <p className="text-red-600" role="alert">
                {errors.select?.message}
              </p>
            )}
          </div>

          {/* Image File */}
          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border dark:border-gray-700  rounded-md cursor-pointer dark:border-gray-600 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2 className="mx-3 text-gray-400">Product Photo</h2>

            <input
              {...register("url", {
                required: "Image is required",
              })}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
          {errors.url && (
            <p className="text-red-600" role="alert">
              {errors.url?.message}
            </p>
          )}

          <div className="space-y-1 text-sm  mt-5">
            <label htmlFor="description" className="block dark:text-gray-400">
              Description
            </label>
            <textarea
              type="tel"
              {...register("description", {
                required: "Description is required",
              })}
              name="description"
              id="description"
              rows={5}
              placeholder="Description..."
              className="w-full px-4 py-3 border rounded-md dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400 "
            />
            {errors.description && (
              <p className="text-red-600" role="alert">
                {errors.description?.message}
              </p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-[#ffbd59] mt-6">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
