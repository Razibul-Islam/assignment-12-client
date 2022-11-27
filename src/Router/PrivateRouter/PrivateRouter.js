import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PLoader from '../../Loader/PLoader';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return <PLoader></PLoader>;
    }

    if (user) {
      return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;