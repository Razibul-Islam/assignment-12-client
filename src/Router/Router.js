import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Product from "../Pages/Products/Product";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        },
        {
            path: '/signin',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<Signup></Signup>
        },
        {
            path: '/product',
            element:<Product></Product>
        }
    ],
  },
]);
export default router;
