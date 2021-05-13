import { createClient } from 'contentful'

export async function getStaticProps(context) {
  let client = createClient( {
    space: ,
    accessToken:
  } )
  return {
    props: {}
  };
}

export default function Recipes() {
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}