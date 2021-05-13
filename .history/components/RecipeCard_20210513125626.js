const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients: } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;