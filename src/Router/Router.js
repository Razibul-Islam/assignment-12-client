import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Error from "../Pages/Shared/Error/Error";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllProduct from "../Pages/Products/AllProduct";
import Brand from "../Pages/Brand/Brand";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";

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
        path: "/allProduct",
        element: (
          <PrivateRouter>
            <AllProduct></AllProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/brand/:name",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/brand/${params.name}`);
        },
        element: (
          <PrivateRouter>
            <Brand></Brand>
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
      {
        path: "/dashboard/myProduct",
        element: (
          <PrivateRouter>
            <MyProduct></MyProduct>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
