import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { createUser, googleCreate, updateUser, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Successfully created!");
        const userInfo = {
          displayName: data.name,
          photoURL: data.url,
        };
        // console.log(userInfo);
        updateUser(userInfo)
          .then((result) => {
            console.log(userInfo);
            console.log(result);
            saveUser(data.name, data.email, data.select, data.url);
          })
          .catch((error) => console.error(error));
        // navigate("/userRoll");
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err.code);
      });
  };

  const googleHandler = () => {
    googleCreate(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, role, photoUrl, verify = "false") => {
    const user = { name, email, role, photoUrl, verify };
    // console.log(user);
    fetch("https://classic-server.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Save-User", data);
        navigate("/");
      });
  };

  return (
    <div className="h-screen flex justify-center items-center z-50">
      <div className="w-full max-w-md  p-8 space-y-3 rounded-xl shadow-xl dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Register Now
        </h1>

        {/* <div className="mt-6">
          <h1 className="text-gray-500 dark:text-gray-400">
            Select type of account
          </h1>

          <div className="mt-3 md:flex md:items-center md:-mx-2">
            <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span className="mx-2">client</span>
            </button>

            <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="mx-2">worker</span>
            </button>
          </div>
        </div> */}
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
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
          <div className="space-y-1 text-sm">
            <label htmlFor="option" className="block dark:text-gray-400">
              Select
            </label>
            <select
              {...register("select", {
                required: "Please Select One",
              })}
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              required
            >
              <option value={""} disabled hidden selected required>
                Select One
              </option>
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </select>
            {errors.select && (
              <p className="text-red-600" role="alert">
                {errors.select?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
            />
            <div
              className="absolute right-2 top-8 cursor-pointer text-gray-800"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <AiFillEye className="h-6 w-6 " />
              ) : (
                <AiFillEyeInvisible className="h-6 w-6 " />
              )}
            </div>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="space-y-1 text-sm relative">
            <label className="block dark:text-gray-400" htmlFor="confirm">
              Confirm Password
            </label>

            <input
              {...register("confirm", {
                required: "Confirm Password is required",

                validate: (match) => {
                  if (watch("password") !== match) {
                    return "Passwords did not match";
                  }
                },
              })}
              placeholder="Confirm Password"
              id="confirm"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
              type={showPass2 ? "text" : "password"}
            />

            <div
              className="absolute right-2 top-8 cursor-pointer text-gray-800"
              onClick={() => setShowPass2(!showPass2)}
            >
              {showPass2 ? (
                <AiFillEye className="h-6 w-6 " />
              ) : (
                <AiFillEyeInvisible className="h-6 w-6 " />
              )}
            </div>

            {errors.confirm && (
              <p role="alert" className="text-red-600">
                {errors.confirm?.message}
              </p>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm border-none dark:text-gray-900 bg-[#ffbd59]">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleHandler}
            aria-label="Log in with Google"
            className="block w-full p-3  rounded-sm dark:text-gray-900 outline outline-[#ffbd59]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current mx-auto text-gray-600"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link to="/signin" className="underline dark:text-gray-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
