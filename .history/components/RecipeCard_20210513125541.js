const RecipeCard = ( { recipe } ) => {

  let { title, cooking } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;