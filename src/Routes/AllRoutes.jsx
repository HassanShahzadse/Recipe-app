import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import Navbar from "../Components/Navbar";
const AllRoutes = () => {
  return (
    <div>
      <Routes path="" element={<Navbar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/bookmark" element={""}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/*" element={""}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
