import { useEffect, useState } from "react";
import { getRecipes, getRecipeDetails } from "../../Utils/backendServices";
import {
  faClock,
  faBookmark,
  faPeopleGroup,
  faCheck,
  faBackward
} from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RecipeDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await getRecipeDetails(id);
      setRecipeDetails(response.data.data.recipe);
      console.log(recipeDetails);
    };
    fetchRecipeDetails();
  }, []);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipeDetails1">
      <Link to={"/home"}><FontAwesomeIcon icon={faBackward} className="fa fabackwords" />home</Link>
    <div className="recipeDetails">
      <div className="heroSection">
        <img src={recipeDetails.image_url} alt={recipeDetails.title}></img>
        <h2 className="recipe__title">
          <span>{recipeDetails.title}</span>
        </h2>
      </div>
      <div className="recipeDet">
        <div className="Detailsicon">
          <FontAwesomeIcon icon={faClock} className="fa faClock" />
          <p>Cooking Time: {recipeDetails.cooking_time} minutes</p>
        </div>
        <div className="Detailsicon">
          <FontAwesomeIcon icon={faPeopleGroup} className="fa faPeopleGroup" />
          <p>Servings: {recipeDetails.servings} </p>
        </div>
        <div className="Detailsicon">
          <FontAwesomeIcon icon={faBookmark} className="fa faBookmark" />
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCheck} className="fa faClock" />
              {ingredient.quantity} {ingredient.unit} {ingredient.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="directions">
        <h1>How To Cook it</h1>
        <p>
          This recipe was carefully designed and tested by{" "}
          <b>{recipeDetails.publisher}</b>. Please check out directions at their
          website.{" "}
        </p>
        <a href={recipeDetails.source_url}>
          <button>DIRECTIONS</button>
        </a>
      </div>
    </div>
    </div>
  );
};
export default RecipeDetails;
