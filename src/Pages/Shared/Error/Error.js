import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`,
        }}
      >
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  flex items-center justify-center">
          <div className="h-2/4 w-2/4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 flex flex-col items-center justify-center text-white ">
            <h1 className="text-7xl font-serif">Error 404</h1>
            <h1 className="text-4xl font-serif py-2">Page not found</h1>
            <p className="text-center pb-2">
              The page you are looking for does not exist; it may have been
              moved,
              <br />
              or removed altogether.
            </p>
            <button className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-3 px-4">
              <Link to="/">Go back Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
