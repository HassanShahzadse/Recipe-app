import "./App.css";
import AddRecipe from "./Components/AddRecipe";
import RecipeList from "./Components/RecipeList/RecipeList";

import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
     {/* <RecipeList/> */}
     
      {/* <AddRecipe/> */}
      <AllRoutes />
    </div>
  );
}

export default App;
