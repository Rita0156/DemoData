import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import RestaurantPage from "./RestaurantPage";
function AllRoutes() {
  return <div>{/* Add Home, Login dashboard and restaurant pages */}
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="restau" element={<RestaurantPage/>}/>
          
       </Routes>
  </div>;
}

export default AllRoutes;
