const RecipeCard = ( { recipe } ) => {

  let { tit }

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;