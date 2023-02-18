import Navbar from "../../Components/Navbar";
import RecipeDetail from '../../Components/RecipeDetails';
import "./Home.css";
const Home = () => {
  return (
    <div className="mainContainer">
      <div className="mainCard">
        <Navbar />
        <h1>Home Page</h1>
        <div><RecipeDetail/></div>
        
      </div>
    </div>
  );
};
export default Home;
