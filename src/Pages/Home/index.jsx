import Navbar from "../../Components/Navbar";
import RecipeDetail from "../../Components/RecipeDetails";
import RecipeList from "../../Components/RecipeList/RecipeList";
import "./Home.css";
const Home = () => {
  return (
    <div className="mainContainer">
      <div className="mainCard">
        <Navbar />
     
        <div>
<RecipeList/>
          {/* <RecipeDetail /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
