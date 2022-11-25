import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Product from "../Pages/Products/Product";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Shared/Error/Error";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import User from "../Pages/Signup/User";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllProduct from "../Pages/Products/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/userRoll",
        element: <User></User>,
      },
      {
        path: "/allProduct",
        element: <AllProduct></AllProduct>
      },
      {
        path: "/product",
        element: (
          <PrivateRouter>
            <Product></Product>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/addProduct",
        element: (
          <PrivateRouter>
            <AddProduct></AddProduct>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
