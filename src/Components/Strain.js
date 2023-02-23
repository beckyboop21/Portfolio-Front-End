
import React from "react";

function Strain(props) {
  const { strain } = props;

  return (
    <div className="StrainCard">
      <h2>{strain.name}</h2>
      <img src={strain.image} alt={strain.name} />
      <p>{strain.description}</p>
      <ul>
        <li>Type: {strain.type}</li>
        <li>Flavors: {strain.flavors.join(", ")}</li>
        <li>Effects: {strain.effects.join(", ")}</li>
        <li>Rating: {strain.rating}/5</li>
      </ul>
    </div>
  );
}

export default Strain;


// import { Link } from "react-router-dom";

// function Strain({ strains }) {
//   return (
//     <tr>
//       <td>
//         {strains.is_avibe ? (
//           <span>⭐️</span>) : (<span>&nbsp; &nbsp; &nbsp;</span>
//         )}
//       </td>
//       <td>
//         {/* external link , will take us to new page,(target means go to a diff page) */}
//         <a href={strains.url} target="_blank" rel="noreferrer">
//           {strains.name}
//         </a>
//       </td>
//       <td>
//         {/* internal link will take us to show -routes in app.js page-show(strain/id)  */}
//         <Link to={`/strains/${strains.id}`}>✏️</Link>
//       </td>
//     </tr>
//   );
// }

// export default Strain;


// import { Link } from "react-router-dom";


// function Strain({ strain }) {
//   console.log(strain);
//   return (
//     <section>
//       <ul>
//         <li>
//           <Link className="strainPicBoc" to={`/strains/${strain.id}`}>
//           <img
//   style={{ width: "200", height: "200" }}
//   className="strainImg"
//   src={strain.image ? strain.image : "https://www.vmcdn.ca/f/files/greatwest/images/branded-content-features/cannabis-weekly/articles/35b_7-weed-strains-to-help-you-sleep.jpg;w=960"}
//   alt={`${strain.name} strain`}
// />
//           </Link>
//           <Link className="strainNameBox" to={`/strains/${strain.id}`}>
//             {strain.name}
//           </Link>
//           <span>
//             {strain.is_avibe ? (
//               <span className="solidweedstrain">🍁❤️🍁</span>
//             ) : (
//               <span className="blackstrain">🍁💔🍁</span>
//             )}{" "}
//           </span>
//           <span>{"     "}</span>
//           <span>
//             <Link to={`/strain/${strain.id}/edit`} className="editPencil">
//               ✏️
//             </Link>
//           </span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default Strain;
