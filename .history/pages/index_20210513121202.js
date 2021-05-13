import { createClient } from 'contentful'

export async function getStaticProps(context) {
  
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