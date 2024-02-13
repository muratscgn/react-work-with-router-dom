import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">RR-DOM Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/product">Product</NavLink>
              <NavLink className="nav-link" to="/about">About Us</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}