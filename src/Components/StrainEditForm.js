import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const StrainEditForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [strain, setStrain] = useState();

  const updateStrain = (updatedStrain) => {
    axios
      .put(`${API}/strains/${id}`, updatedStrain)
      .then(
        () => {
          navigate(`/strains/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setStrain({ ...strain, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/strains/${id}`)
      .then((response) => setStrain(response.data))
      .catch((error) => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStrain(strain);
  };

  if (!strain) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={strain.name}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          value={strain.type}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="mood">Mood:</label>
        <select id="mood" value={strain.mood} onChange={handleTextChange}>
          <option value="">Select a mood</option>
          <option value="Happy">Happy</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Energetic">Energetic</option>
          <option value="Creative">Creative</option>
          <option value="Sleepy">Sleepy</option>
          <option value="Focused">Focused</option>
          <option value="Hungry">Hungry</option>
          <option value="Uplifted">Uplifted</option>
        </select>

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={strain.image}
          onChange={handleTextChange}
        />

        <button className="submit" type="submit">
          Submit
        </button>
      </form>

      <div>
        <Link to={`/strains/${id}`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};
export default StrainEditForm;
