const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime } = recipe.fields
, featuredImage
  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;