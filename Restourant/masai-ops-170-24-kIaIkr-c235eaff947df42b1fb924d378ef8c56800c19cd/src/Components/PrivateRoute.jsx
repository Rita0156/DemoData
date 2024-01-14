import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContextProvider, { AppContext } from "../Context/AppContext";
function PrivateRoute() {
    const { authState } = useContext(AppContext);
    if (!authState.isAuth) {
       return  <Navigate to='/login' />
    }

    return children;
        
}

export default PrivateRoute;
