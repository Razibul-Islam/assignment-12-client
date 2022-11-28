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
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Blog from "../Pages/Blog/Blog";
import Seller from "../Pages/Dashboard/AllUser/Seller";
import Buyer from "../Pages/Dashboard/AllUser/Buyer";
import AllReport from "../Pages/Dashboard/AllReport/AllReport";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import Payment from "../Pages/Dashboard/MyOrders/Payment";

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
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/seller",
        element: (
          <AdminRoute>
            <Seller></Seller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyer",
        element: (
          <AdminRoute>
            <Buyer></Buyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <AllReport></AllReport>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orders/${params.id}`),
      },
    ],
  },
]);
export default router;
