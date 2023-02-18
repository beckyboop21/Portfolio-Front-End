import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/strain">Canna Tech App</Link>
      </h1>
      <button>
        <Link to="/strains/new">New Strains</Link>
      </button>
    </nav>
  );
}

// import { Link } from "react-router-dom";

// export default function Nav() {
//   return (
//     <nav className="nav">
//       <h1  >
//         <Link to="/" className="navButton">
//          Strains List{" "}
//         </Link>
//       </h1>
      
//       <button className="outerNavButton1">
//       <Link className="navButton" to="/strain">
//           Strain List 
//         </Link>
//       </button>

//       <button className="outerNavButton2">
//       <Link className="navButton" to="/strain/new">
//           New Strain
//         </Link>
    
//       </button>
//     </nav>
//   );
// }
