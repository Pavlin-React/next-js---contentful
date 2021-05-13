import Link from 'next/link'
import Image from 'next/image'

const RecipeCard = ( { recipe } ) => {

  let { title, cookingTime, thumbnail, slug } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={ 'https://'+ thumbnail.fields }
        width=
        />
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