
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:3333";

function StrainNewForm() {

  let navigate = useNavigate();

  const addStrain = (newStrain) => {
    axios
    // backend route 
      .post(`${API}/strains`, newStrain)
      .then(
        () => {
          navigate(`/strains`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [strain, setStrain] = useState({
    name: "",
    type: "",
    mood: 0,
    is_avibe: false,
    image: ""
  });

  const handleTextChange = (event) => {
    setStrain({ ...strain, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setStrain({ ...strain, is_avibe: !strain.is_avibe });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStrain(strain);
  };
  // on change attribute
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={strain.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Strain Name"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          value={strain.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="url">Mood:</label>
        <input
          id="mood"
          type="number"
          min="1"
          max="5"
          name="mood"
          value={strain.mood}
          placeholder="1-5"
          onChange={handleTextChange}
        />
        <label htmlFor="is_avibe">Favorite:</label>
        <input
          id="is_avibe"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={strain.is_avibe}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default StrainNewForm;













