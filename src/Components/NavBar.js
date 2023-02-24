
// import React from 'react'
// import { Link } from 'react-router-dom'
import '../CSS/NavBar.css'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <h1  >
        <Link to="/strains">Strains</Link>
      </h1>
      <button>   
      <Link to="strains/new">New Strain</Link>
      {/* <Link to="strains/new">New Strain</Link> */}
      </button>
    </nav>
  );
}

