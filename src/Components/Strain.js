// import React from "react";
import { Link } from "react-router-dom";

function Strain({strain}) {
  // const { strain } = props;

  return (

    <div style={{
      padding: 5,
      height: 'auto',
      textAlign:'center',
      margin: '30px auto'

    }}>
      <Link to={`/strains/${strain.id}`}>
      <img src={strain.image} alt="Cannabis strain" />
      </Link>
      <div>
      

      
        <p>{strain.name}</p>
        </div>

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
