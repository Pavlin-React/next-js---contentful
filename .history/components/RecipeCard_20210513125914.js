const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients, slug } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        {/* {image} */}
      </div>
    </div>
  );
}
 
export default RecipeCard;