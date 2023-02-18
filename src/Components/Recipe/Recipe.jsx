const Recipe = (recipeList) => {
console.log(recipeList)
    return(
        <div>
            <img src={recipeList.image_url}/>
            <h2>{recipeList.title}</h2>
            <p>{recipeList.publisher}</p>
        </div>
    )

}
export default Recipe;