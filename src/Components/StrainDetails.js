
import Reviews from "./Reviews"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

// inside the BookmarkDetails function....
function StrainDetails() {
  const [strain, setStrain] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/strains/${id}`)
      .then((response) => {
        console.log(response.data);
        setStrain(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]); //api removed 

  let navigate = useNavigate();
  const handleDelete = (id) => {
    axios
      .delete(`${API}/strains/${id}`)
      .then(
        () => {
          navigate(`/strain`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
      }
  return (
    <article>
      <h3>
        {strain.is_favorite ? <span>⭐️</span> : null} {strain.name}
      </h3>
      <h5>
        <span>
          <a href={strain.url}>{strain.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {strain.url}
      </h5>
      <h6>{strain.category}</h6>
      <p>{strain.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/strains`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/strains/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
  <button onClick={handleDelete}>Delete</button>
</div>
      </div>
      <Reviews />
    </article>
  
  );
}

export default StrainDetails;


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

// function StrainDetails() {
//   const [strain, setStrain] = useState({});
//   let { id } = useParams();
//   let navigate = useNavigate();

//   // Inside StrainDetails function
//   const handleDelete = () => {
//     axios
//       .delete(`${API}/strains/${id}`)
//       .then(
//         () => {
//           navigate(`/strains`);
//         },
//         (error) => console.error(error) //normally for 404 errors when item is not found
//       )
//       .catch((c) => console.warn("catch", c)); //for 500 error for server errors
//   };

//   useEffect(() => {
//     axios
//       .get(`${API}/strains/${id}`)
//       .then((response) => {
//         setStrain(response.data);
//       })
//       .catch(() => {
//         navigate("/error");
//       });
//   }, [API, id]);

//   return (
//     <article className="StrainDetails">
//       <div className="strainShowBox">
//         <h4 className="strainName strainShowBoxHdg">{strain.name}</h4>
//         <img
//           className="strainimg"
//           src={
//             strain.image
//               ? strain.image
//               : "https://thumb.spokesman.com/P64L8N4TmsRTaMFVJcsLZKnRjFI=/2500x1875/smart/media.spokesman.com/photos/2020/09/21/rainbow_teaser.jpg"
//           }
//           alt="image not found"
//         />
//         <h3>{strain.is_avibe ? <span>❤️</span> : <span>♡</span>}</h3>

//         <span className="strainSpec">name: {strain.name} | </span>
//         <span className="strainSpec">mood: {strain.mood} | </span>
//         <span className="strainSpec">type: {strain.type}</span>
//         <br />

//         <div className="showNavigation">
//           <Link to={`/strains`}>
//             <button>Back</button>
//           </Link>

//           <Link to={`/strains/${id}/edit`}>
//             {" "}
//             <button>Edit</button>
//           </Link>

//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       </div>

//       <div className="strainLinkBox">
//         <h4 className="strainLinkBoxHdg">View Other Strains</h4>
//         {strain.relatedStrains &&
//           strain.relatedStrains.map((relatedStrain) => {
//             return (
//               <div key={relatedStrain.id} className="strainLinkData">
//                 <img
//                   style={{ height: 25, width: 25 }}
//                   src={
//                     relatedStrain.image
//                       ? relatedStrain.image
//                       : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"
//                   }
//                   alt="related strain"
//                 />
//                 <Link to={`/strains/${relatedStrain.id}`}>
//                   {relatedStrain.name}
//                 </Link>
//               </div>
//             );
//           })}
//       </div>
//     </article>
//   );
// }

// export default StrainDetails;
