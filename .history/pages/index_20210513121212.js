import { createClient } from 'contentful'

export async function getStaticProps(context) {
  let client = createClient
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