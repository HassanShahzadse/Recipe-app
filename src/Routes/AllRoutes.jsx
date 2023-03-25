import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/LogIn/Login";
import Navbar from "../Components/Navbar";
import RecipeList from "../Components/RecipeList/RecipeList";
import RecipeDetails from "../Components/RecipeDetails";
import AddRecipe from "../Components/AddRecipe";
const AllRoutes = () => {
  return (
    <div>
      <Routes path="" element={<Navbar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/recipelist" element={<RecipeList />}></Route>
        <Route path="/bookmark" element={""}></Route>
        <Route path="/addRecipe" element={<AddRecipe />}></Route>
        <Route path="/recipeDetails/:id" element={<RecipeDetails />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/*" element={""}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
