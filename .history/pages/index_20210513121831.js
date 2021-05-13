import { createClient } from 'contentful'

export async function getStaticProps(context) {
  let client = createClient( {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: 'K68gREFSGHRuj_SIYNALJOkum20w421XVSTp65mWMvk'
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