import Link from 

const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients, slug } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        {/* {image} */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Cooking time { cookingTime } mins to make</p>
        </div>
        <div className="actions">
          <Link></Link>
        </div>
      </div>
    </div>
  );
}
 
export default RecipeCard;