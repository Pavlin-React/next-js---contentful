const RecipeCard = ( { recipe } ) => {

  let { title } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;