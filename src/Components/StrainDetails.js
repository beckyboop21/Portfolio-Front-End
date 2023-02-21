

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews"
const API = process.env.REACT_APP_API_URL;


// inside the strainDetails function....
function StrainDetails() {
  let { id } = useParams();
  const [strain, setStrain] = useState({});
  let navigate = useNavigate(); 
 

  useEffect(() => {
    axios.get(`${API}/strains/${id}`)
    .then((response) => {
        console.log(response.data);
        setStrain(response.data);
      })
      .catch((c) => {
        console.warn("catch, c");
      });
  }, [id, navigate]); 
  const deleteStrain = () => {
    axios
    .delete(`{API}/strains/${id}`)
    .then(() => {
  navigate(`/strains`);
  })
  .catch((c) => console.error("catch", c));
};
const handleDelete = () => {
  alert("button clicked");
  deleteStrain();
};
  return (
    <>
    <article>
      <h3>
        {strain.is_avibe ? <span>🍁</span> : null} {strain.name}
      </h3>
      <h5>
        <span>
          <a href={strain.url}>{strain.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        {strain.url}
      </h5>
      <h6>{strain.type}</h6>
      <p>{strain.description}</p>
         <div className="showNavigation">
        <div>
            {" "}
          <Link to={`/strains`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
        <button onClick={() => handleDelete(id)}>Delete</button>

       </div>
      </div>
      <Reviews />
    </article>
  <Reviews />
  </>
  );
}

export default StrainDetails;

