import { Link, NavLink } from "react-router-dom";

export default function Navbar({ user, handleLogout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">RR-DOM Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Products</NavLink>
              <NavLink className="nav-link" to="/about">About Us</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="d-flex justify-content-end btn btn-outline-success">
            {
              user ?
                <NavLink className="nav-link" onClick={handleLogout}>Welcome {user.name}</NavLink> :
                <NavLink className="nav-link" to="/login">Login</NavLink>
            }
          </div>
        </div>
      </nav>
    </>
  )
}