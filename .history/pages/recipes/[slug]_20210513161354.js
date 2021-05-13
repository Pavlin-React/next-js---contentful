import { createClient } from 'contentful'

let client = createClient( {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
} )

export async function getStaticPaths() {

  let res = await client.getEntries( { content_type: 'recipe' } )

  let paths = res.items.map(item => {
    return {
      paths: { slug: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps( { params } ) {

  

  return {
    props: {}
  };
}

export default function RecipeDetails() {
  return (
    <div>
      Recipe Details
    </div>
  )
}