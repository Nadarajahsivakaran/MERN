import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const Private = ()=>{
    const auth = localStorage.getItem('status');
    return auth==1 ? <Outlet/> : <Navigate  to="/"/>
}

export default Private;