import Link from 'next/link'
import

const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, featuredImage, ingredients, slug } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        <Image />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Cooking time { cookingTime } mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug }><a>Cook this</a></Link>
        </div>
      </div>
    </div>
  );
}
 
export default RecipeCard;