import { createClient } from 'contentful'

export async function getStaticProps(context) {
  let client = createClient( {
    space: proc,
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