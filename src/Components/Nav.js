import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h1  >
        <Link to="/" className="navButton">
         Strains List{" "}
        </Link>
      </h1>
      
      <button className="outerNavButton1">
      <Link className="navButton" to="/strain">
          Strain List 
        </Link>
      </button>

      <button className="outerNavButton2">
      <Link className="navButton" to="/strain/new">
          New Strain
        </Link>
    
      </button>
    </nav>
  );
}
