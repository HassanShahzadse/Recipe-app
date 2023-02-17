import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes path="" element={""}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/signup" element={""}></Route>
        <Route path="/bookmark" element={""}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/*" element={""}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
