import "./Navbar.css"
import { faBookmark,faSearch,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import RecipeList from "../RecipeList/RecipeList"
const Navbar = () =>{
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchInputChange = (event) => {
        console.log(event.target.value);
        setSearchQuery(event.target.value);
      };
    return(
        <div className="Navbar">
            <div className="navbarElements">
                <div className="Brand">
                    <img src="https://forkify-amaaz.netlify.app/logo.8a7af738.png" alt="Brand Logo" className="brandImage"/>
                </div>
                <div className="Search">
                    <div className="searchinput">
                    <input placeholder="Search Over 1,000,000 recipies" className="navbarSearch" 
                      value={searchQuery}
                     onChange={handleSearchInputChange}
                     ></input>
                    </div>
                    <div className="searchbtn">
                    <button >
                    <FontAwesomeIcon icon={faSearch} />
                          {" "}Search</button>
                    </div>
                </div>
                <div className="Links">
                    
                <div><span><FontAwesomeIcon icon={faPenToSquare} /></span><p>Add RECIPE</p></div>
                    <div><span><FontAwesomeIcon icon={faBookmark} /></span><p>BOOKMARKS</p></div>
                </div>
               
            </div>
            <RecipeList searchQuery={searchQuery} />
        </div>
    )
}
export default Navbar