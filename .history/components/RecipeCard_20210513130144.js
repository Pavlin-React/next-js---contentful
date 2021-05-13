const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients, slug } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        {/* {image} */}
      </div>
      <div className="content">
        <div className="info">
          <h2>{ title }</h2>
        </div>
      </div>
    </div>
  );
}
 
export default RecipeCard;