import React from "react";
import {Navigate} from "react-router-dom";



interface PrivateRouteProps {
    children : React.ReactElement;
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({children}) => {
    const token = localStorage.getItem("token");

    return token ? children:
        <Navigate to="/" replace />;

};



export default PrivateRoute;