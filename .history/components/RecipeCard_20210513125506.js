const RecipeCard = ( { recipe } ) => {

  let { title }

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;