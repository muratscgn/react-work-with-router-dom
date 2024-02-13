import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/" className="btn btn-info">Click to go to the home page!</Link>
    </>
  )
}