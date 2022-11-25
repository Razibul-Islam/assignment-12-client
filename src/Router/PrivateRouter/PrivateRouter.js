import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return <Loader></Loader>;
    }

    if (user) {
      return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;