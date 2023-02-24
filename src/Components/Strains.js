import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Strain from './Strain';

const API = process.env.REACT_APP_BASE_URL;

function Strains() {
  const [loading, setLoading] = useState(true);
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/strains`)
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
        setLoading(false); // set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching strains:', error);
        setLoading(false); // set loading to false when there's an error
        // Handle the error here, such as setting an error state
      });
  }, []);

  if (loading) {
    return <div className="loader" />;
  }

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
