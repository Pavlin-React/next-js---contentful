import Link from "next/link"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oooops that page can not be found :(</h2>
      <p>Redirecting to <Link>Homepage</Link>for more tasting</p>

      
    </div>
  );
}
 
export default NotFound;