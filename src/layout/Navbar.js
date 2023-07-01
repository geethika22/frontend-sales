import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        Sales Page
    </a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo03" 
    aria-controls="navbarTogglerDemo03"
     aria-expanded="false"
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="btn btn-outline-light" to="/adduser">Create Sale</Link>
    
  </div>
</nav>
    </div>
  )
}
