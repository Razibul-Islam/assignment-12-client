import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateUser = (data) => {
    const name = data.name;
    const role = data.select;
    const image = data.url;
    console.log(name, role, image);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md  p-8 space-y-3 rounded-xl shadow-xl dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Update Your Profile
        </h1>
        <form
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(updateUser)}
        >
          {/* <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div> */}
          
          <div className="space-y-1 text-sm">
            <label htmlFor="option" className="block dark:text-gray-400">
              Select
            </label>
            <select
              {...register("select", {
                required: "Please Select One",
              })}
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            >
              <option disabled hidden selected>
                Select One
              </option>
              <option>Client</option>
              <option>Worker</option>
            </select>
            {/* {errors.select && (
              <p className="text-red-600" role="alert">
                {errors.select?.message}
              </p>
            )} */}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="url" className="block dark:text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              {...register("url", {
                required: "Name is required",
              })}
              name="url"
              id="url"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-[#ffbd59]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
