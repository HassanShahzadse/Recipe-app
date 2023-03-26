import axios from "axios";

export const getRecipes = (searchedRecipe) => {
  let response = axios.get(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchedRecipe}`
  );

  return response;
};

export const getRecipeDetails = (searchedRecipeId) => {
  let response = axios.get(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${searchedRecipeId}`
  );

  return response;
};

export const addRecipe = (recipe, newRecipe) => {
  let apiKey = "077c720f-4aef-4a18-ba8f-e917e208b9b0";

  let response = axios.post(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}&key=${apiKey}`,
    newRecipe
  );

  return response.status;
};
