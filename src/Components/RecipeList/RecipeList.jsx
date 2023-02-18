import { useEffect, useState } from "react";
import { getRecipes } from "../../Utils/backendServices";
import Recipe from "../Recipe/Recipe";
const RecipeList = () => {
  const [recipeList, setRecipes] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      let res = await getRecipes("pizza");
      //setRecipes(res.data);
      console.log("DATA");
      // console.log(recipes);
      console.log(res.data.data.recipes);
      setRecipes(res.data.data.recipes);
      //console.log(recipe[0]);
    };
    getRecipe();
  },[]);

  return (
   <div>
    { recipeList && (
    <Recipe> recipeList={recipeList}</Recipe>
)}
   </div>
  );
};
export default RecipeList;
