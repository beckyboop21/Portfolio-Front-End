import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Strain from './Strain';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_BASE_URL;

function Strains() {
  const [strains, setStrains] = useState([]);
  let { id } = useParams();

  const handleEdit = (updatedStrain) => {
    axios
      .put(`${API}/strains/${id}/strains/${updatedStrain.id}`, updatedStrain)
      .then((response) => {
        const copyStrainArray = [...strains];
        const indexUpdatedStrains = copyStrainArray.findIndex((strain) => {
          return strain.id === updatedStrain.id;
        });
        copyStrainArray[indexUpdatedStrains] = response.data;
        setStrains(copyStrainArray);
      })
      .catch((c) => console.warn('catch', c));
  };
  const handleDelete = (id) => {
    axios
      .delete(`${API}/strains/${id}/strains/${id}`)
      .then(
        (response) => {
          const copyStrainArray = [...strains];
          const indexDeletedStrains = copyStrainArray.findIndex((strain) => {
            return strain.id === id;
          });
          copyStrainArray.splice(indexDeletedStrains, 1);
          setStrains(copyStrainArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };
  useEffect(() => {
    axios
      .get(`${API}/strains`)
      .then((res) => {
        console.log(res.data);
        setStrains(res.data);
        //   setLoading(false); // set loading to false when data is fetched
      })
      .catch((c) => {
        console.warn('catch', c);
        // setLoading(false); // set loading to false when there's an error
        // Handle the error here, such as setting an error state
      });
  }, []);

  // if (loading) {
  //   return <div className="loader" />;
  // }
  return (
    <div className="Strains">
      {strains.map((strain) => {
        return (
          <Strain
            key={strain.id}
            strain={strain}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default Strains;
