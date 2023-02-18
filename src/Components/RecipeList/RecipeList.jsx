import { useEffect, useState } from "react";
import { getRecipes } from "../../Utils/backendServices";

const RecipeList = () => {
  const [recipe, setRecipes] = useState();

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
  }, []);

  return (
   <div>

   </div>
  );
};
export default RecipeList;
