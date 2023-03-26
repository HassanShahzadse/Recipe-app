import { Link } from "react-router-dom";
import "./RecipeCard.css";
const Recipe = (props) => {
  return (
    <div className="main-container">
      <Link to={`/recipeDetails/${props.recipeList.id}`}>
        <div className="main-container">
          <div className="recipe-detail">
            <div>
              <img
                className="recipe-image"
                src={props.recipeList.image_url}
                alt={"food"}
              />
            </div>
            <div className="recipe-info">
              <h2>{props.recipeList.title}</h2>
              <p>{props.recipeList.publisher}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
