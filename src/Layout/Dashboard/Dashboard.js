import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useSeller from "../../Hooks/useSeller";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import Nav from "../../Pages/Shared/Nav/Nav";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [drawer, setDrawer] = useState(false);
  const [isSeller] = useSeller(user?.email);
  console.log(isSeller);
  return (
    <div>
      <Nav></Nav>
      <div className="drawer drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={drawer}
        />
        <div className="drawer-content">
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
            onClick={() => setDrawer(true)}
          >
            Open drawer
          </label> */}
          <Outlet></Outlet>
        </div>
        {/* <div className={drawer ? "drawer-side" : ""}> */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content relative">
            <p
              className="absolute top-0 right-2 px-2 bg-[#ffbd59] block md:hidden cursor-pointer rounded-full"
              onClick={() => setDrawer(false)}
            >
              X
            </p>
            {/* <li>
              <Link to="/dashboard/Product">Product</Link>
            </li> */}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
