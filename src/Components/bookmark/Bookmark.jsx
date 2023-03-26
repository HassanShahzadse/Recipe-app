import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Recipe from "../RecipeCard/RecipeCard";
const Bookmark = () => {
  let bookmarks = useSelector((state) => state.bookmark.bookmarkedRecipes);
  return (
    <div>
      <Link to={"/home"}>home</Link>
      {bookmarks.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Recipe recipeList={recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default Bookmark;
