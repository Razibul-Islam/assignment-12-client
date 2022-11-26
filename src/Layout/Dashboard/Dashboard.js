import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useSeller from "../../Hooks/useSeller";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import Nav from "../../Pages/Shared/Nav/Nav";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);
  const [drawer, setDrawer] = useState(false);
  const [isSeller] = useSeller(user?.email);
  // console.log(isSeller);
  return (
    <div>
      <Nav setDrawer={setDrawer}></Nav>
      <div className="drawer h-full drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={drawer}
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        {/* <div className={drawer ? "drawer-side" : ""}> */}
        <div className="drawer-side ">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content relative ">
            <p
              className="absolute top-0 right-2 px-2 bg-[#ffbd59] block md:hidden cursor-pointer rounded-full"
              onClick={() => setDrawer(false)}
            >
              ✕
            </p>
            {/* <li>
              <Link to="/dashboard/Product">Product</Link>
            </li> */}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProduct">My Product</Link>
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
