import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function StrainEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [strain, setStrain] = useState({
    name: "",
    type: "",
    mood: 0, 
    is_avibe: false,
    image: "",
  });


  const updateStrain = (updatedStrain) => {
    axios
      .put(`${API}/strains/${id}`, updatedStrain)
      .then(() => {
        navigate(`/strains/${id}`);
      })
      .catch((error) => console.error(error));
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
    updateStrain(strain, id);
  };

  if (!strain) {
    return <div>Loading...</div>;
  }

  return (
    <div classnameName="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={strain.name}
          onChange={handleTextChange}
          placeholder="Name"
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
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};
export default StrainEditForm;
