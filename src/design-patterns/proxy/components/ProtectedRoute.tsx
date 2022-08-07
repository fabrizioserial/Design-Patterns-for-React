import React from "react";
import {Navigate, Outlet} from "react-router-dom";

interface ProtectedRouteProps {
    permission: boolean,
    redirectPath?: string,
    children?: JSX.Element
}

const ProtectedRoute  = ({permission, redirectPath = '/login', children}:ProtectedRouteProps) => {
    if (!permission) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute