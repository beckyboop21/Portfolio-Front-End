import React, { useState, useEffect } from "react";
import axios from "axios";
import Strain from "./Strain";
import AgeModal from "./AgeModal";

const API = process.env.REACT_APP_BASE_URL;

function Strains() {
    console.log(API);
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/strains`)
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
      })
      .catch((error) => {
        console.error('Error fetching strains:', error);
        // Handle the error here, such as setting an error state
      });
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


