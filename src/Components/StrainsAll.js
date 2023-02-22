import { useState, useEffect } from "react";
import axios from "axios";
import Strains from "./Strains.js";

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function StrainsAll() {
  const [strains, setStrain] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/strains`)
      .then((response) => {
        console.log(response.data);
        setStrain(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <p className="strainCards">
        {strains.map((strain) => {
          return <Strains key={strain.id} strain={strain} />; 
        })}
      </p>
    </div>
  );
}

export default StrainsAll;
