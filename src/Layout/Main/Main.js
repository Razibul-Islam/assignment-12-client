import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Nav from "../../Pages/Shared/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="mx-auto w-11/12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
