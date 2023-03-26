import "./Navbar.css";
import {
  faBookmark,
  faSearch,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RecipeList from "../RecipeList/RecipeList";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const changeBookmarkHandler = () => {};
  return (
    <div className="Navbar">
      <div className="navbarElements">
        <div className="Brand">
          <img
            src="https://forkify-amaaz.netlify.app/logo.8a7af738.png"
            alt="Brand Logo"
            className="brandImage"
          />
        </div>
        <div className="Search">
          <div className="searchinput">
            <input
              placeholder="Search Over 1,000,000 recipies"
              className="navbarSearch"
              value={searchQuery}
              onChange={handleSearchInputChange}
            ></input>
          </div>
          <div className="searchbtn">
            <button>
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </div>
        </div>
        <div className="Links">
          <div>
            <Link to={"/addRecipe"}>
              <span>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <p>Add RECIPE</p>
            </Link>
          </div>
          <div>
            <Link to={"/bookmarks"}>
              <button onClick={changeBookmarkHandler}>
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
                <p>BOOKMARKS</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <RecipeList searchQuery={searchQuery} />
    </div>
  );
};
export default Navbar;
