import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewStrainForm() {
  let navigate = useNavigate();

  const addStrain = (newStrain) => {
    axios
      .post(`${API}/strains`, newStrain)
      .then(
        () => {
          navigate(`/strain`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [strain, setStrain] = useState({
    name: "",
    type: "",
    mood: "",
    is_avibe: false,
    image: ""
  });

  const handleTextChange = (event) => {
    setStrain({ ...strain, [event.target.id]: event.target.value });
    console.log("newly set Strain", strain);
  };

  const handleCheckboxChange = () => {
    setStrain({ ...strain, is_avibe: !strain.is_avibe });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addStrain(strain);
  };

  return (
    <div className="newStrain">
      <form onSubmit={handleSubmit} className="newStrainFormBox">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={strain.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Please enter the strain name"
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          name="type"
          value={strain.type}
          placeholder="Please enter the strain type"
          onChange={handleTextChange}
        />

        <label htmlFor="mood">Mood:</label>
        <input
          id="mood"
          type="text"
          name="mood"
          value={strain.mood}
          placeholder="Please enter the strain mood"
          onChange={handleTextChange}
        />

        <label htmlFor="is_avibe">Is a vibe:</label>
        <input
          id="is_avibe"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={strain.is_avibe}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={strain.image}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <br />
        <span>
          <input className="newSubmitButton" type="submit" />
        </span>
        <Link to={`/`}>
          <button className="newCancelButton">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default NewStrainForm;
