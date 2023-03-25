import { useEffect, useState } from "react";
import { getRecipes } from "../../Utils/backendServices";
import Recipe from "../RecipeCard/RecipeCard";

const RecipeList = ({ searchQuery }) => {
  const [recipeList, setRecipes] = useState([]);
 
  useEffect(() => {
    const getRecipe = async () => {
      let res = await getRecipes(searchQuery);
      setRecipes(res.data.data.recipes);
    };
   
      getRecipe();
    
  }, [searchQuery]);

  return (
    <div>
      {recipeList && recipeList.map((recipe, index) => (
        <Recipe key={index} recipeList={recipe} index={index} />
      ))}
    </div>
  );
};

export default RecipeList;
