import { createClient } from 'contentful'

let client = createClient( {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
} )

export async function getStaticPaths() {

  let res = await client.getEntries( { content_type: 'recipe' } )

  let paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps( { params } ) {

  let { items } = await client.getEntries( {
    content_type: 'recipe',
    'fields.slug': params.slug
  } )

  return {
    props: { recipe: items[0] }
  };
}

export default function RecipeDetails( { recipe } ) {

  let { featuredImage, cookingTime }

  return (
    <div>
      Recipe Details
    </div>
  )
}