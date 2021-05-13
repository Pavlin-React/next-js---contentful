const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage,  } = recipe.fields

  return (
    <div>
      { recipe.fields.title }
    </div>
  );
}
 
export default RecipeCard;