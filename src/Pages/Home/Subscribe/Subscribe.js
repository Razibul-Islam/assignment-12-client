import React from "react";

const Subscribe = () => {
  const handlereload = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section className="flex flex-col mt-10 mx-auto overflow-hidden bg-white rounded-lg shadow-lg bg-[#ffbd59] md:flex-row md:h-48">
      <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-[#ffbd59]">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-black">
            Sign Up For buy Mobile
          </h2>

          <p className="mt-2 text-sm text-black">
            It is a second hand mobile buying and selling website
          </p>
        </div>
      </div>

      <div className=" md:flex mt-3 md:mt-0 bg-white items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form onSubmit={handlereload}>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none  dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="text"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />

            <button className="px-4 py-3 text-sm font-medium tracking-wider text-black uppercase transition-colors duration-300 transform border-none bg-[#ffbd59] focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
