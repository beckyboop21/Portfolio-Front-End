import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import Comments from './Reviews'
const API = process.env.REACT_APP_BASE_URL

function StrainDetails () {
    const [strain, setStrain] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    const deleteStrain = () => {
        axios
        .delete(`${API}/strains/${id}`)
        .then(
            () => {
                navigate(`/strains`)
            }
        )
        .catch((c) => console.warn('catch', c))
    }

    useEffect(() => {
        axios
        .get(`${API}/strains/${id}`)
        .then((response) => {
            console.log(response.data)
            setStrain(response.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])

    return (
        <article>
            <div>
                <img src={strain.image} alt='strain' />
                <h1>{strain.name}</h1> 
               <table>
                <th>
                    <p>Strain Details</p>
                </th>
                <tr>
                    <td>
                        <h3>Type:</h3>
                    </td>
                    <td>
                    <h3>
                 {strain.is_avibe ? <span>🍁</span> : null} {strain.name}
                    </h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h5>
                    <span>
                    <a href={strain.url}>{strain.name}</a>
                    </span>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                    {strain.url}
                    </h5>
                    </td>
                    <td>
                        <h3>{strain.mood}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>This is a for sure Vibe</h3>
                    </td>
                    <td>
                        <h3>{strain.is_avibe}</h3>
                    </td>
                </tr>
                
               </table>
               <div>
                    <div>
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
                        <div>
                            <button onClick={deleteStrain}>
                                Delete
                            </button>
            <Comments />
                        </div>
                    </div>
               </div>
            </div>
        </article>
    )
}

export default StrainDetails;


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Reviews from "./Reviews"
// const API = process.env.REACT_APP_API_URL;


// // inside the strainDetails function....
// function StrainDetails() {
//   let { id } = useParams();
//   const [strains, setStrain] = useState({});
//   let navigate = useNavigate(); 
 

//   useEffect(() => {
//     axios.get(`${API}/strains/${id}`)
//     .then((response) => {
//         console.log(response.data);
//         setStrain(response.data);
//       })
//       .catch((c) => {
//         console.warn("catch, c");
//       });
//   }, [id, navigate]); 
//   const deleteStrain = () => {
//     axios
//     .delete(`{API}/strains/${id}`)
//     .then(() => {
//   navigate(`/strains`);
//   })
//   .catch((c) => console.error("catch", c));
// };
// const handleDelete = () => {
//   alert("button clicked");
//   deleteStrain();
// };
//   return (
//     <>
//     <article>
//       <h3>
//         {strains.is_avibe ? <span>🍁</span> : null} {strains.name}
//       </h3>
//       <h5>
//         <span>
//           <a href={strains.url}>{strains.name}</a>
//         </span>{" "}
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
//         {strains.url}
//       </h5>
//       <h6>{strains.type}</h6>
//       <p>{strains.description}</p>
//          <div className="showNavigation">
//         <div>
//             {" "}
//           <Link to={`/strains`}>
//             <button>Back</button>
//           </Link>
//         </div>
//         <div>
//         <button onClick={() => handleDelete(id)}>Delete</button>

//        </div>
//       </div>
//       <Reviews />
//     </article>
//   <Reviews />
//   </>
//   );
// }

// export default StrainDetails;

