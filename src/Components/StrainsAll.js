import { useState, useEffect } from "react";
import axios from "axios";
import Strain from "./Strain"; //this line needed?

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function StrainsAll() {
  const [strain, setStrain] = useState([]);
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
        {strain.map((strain) => {
          return <Strain key={strain.id} strain={strain} />; 
        })}
      </p>
    </div>
  );
}

export default StrainsAll;
