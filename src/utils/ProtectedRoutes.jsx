import { Outlet,Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";
import { useContext } from "react";

const ProtectedRoutes =({role}) =>{
    const {auth,} = useContext(AuthContext);
    return auth.role===role?<Outlet/> : <Navigate to='/unauthorized'/>

}

export default ProtectedRoutes;