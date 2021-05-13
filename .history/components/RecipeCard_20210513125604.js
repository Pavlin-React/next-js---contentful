const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;