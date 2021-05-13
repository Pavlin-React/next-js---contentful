const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients, method, s } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;