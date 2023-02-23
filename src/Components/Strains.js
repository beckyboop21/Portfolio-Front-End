import React, { useState, useEffect } from "react";
import axios from "axios";
import Strain from "./Strain";
// import AgeModal from "./AgeModal";




const API = process.env.REACT_APP_BASE_URL;

function Strains() {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/strains`)
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Strains">
      <p className="strainCards">
        {strains.map((strain) => {
          return <Strain key={strain.id} strain={strain} />;
        })}
      </p>
    </div>
  );
}

export default Strains;


