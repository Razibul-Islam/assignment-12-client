import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useSeller from "../../Hooks/useSeller";
import Loader from "../../Loader/Loader";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
