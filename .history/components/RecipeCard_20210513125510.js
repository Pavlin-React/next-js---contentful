const RecipeCard = ( { recipe } ) => {

  let { title } = recipe

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;