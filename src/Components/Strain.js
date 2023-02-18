
import { Link } from "react-router-dom";

function Bookmark({ bookmark }) {
  return (
    <tr>
      <td>
        {bookmark.is_favorite ? (
          <span>⭐️</span>) : (<span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.name}
        </a>
      </td>
      <td>
        <Link to={`/bookmarks/${bookmark.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Bookmark;


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
