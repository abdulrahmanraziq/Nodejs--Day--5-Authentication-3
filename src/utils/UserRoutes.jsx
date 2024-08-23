import React from "react";
import { Navigate } from "react-router-dom";
function UserRoutes({children}){
    const role = sessionStorage.getItem('role');
    return role === 'User' ? children : <Navigate to="/login" />
}

export default UserRoutes;