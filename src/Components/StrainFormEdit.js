import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function StrainFormEdit() {
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

  const handleCheckboxChange = () => {
    setStrain({ ...strain, is_avibe: !strain.is_avibe });
  };

  useEffect(() => {
    axios.get(`${API}/bookmarks/${id}`).then(
      (response) => setStrain(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStrain(strain, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={strain.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Canna Tech App"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={strain.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={strain.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_avibe">A Vibe:</label>
        <input
          id="is_avibe"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={strain.is_avibe}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/strains/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default StrainFormEdit;



// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// const API = process.env.REACT_APP_API_URL;

// function EditStrainForm() {
//   let id = useParams();
//   let navigate = useNavigate();

//   const [strain, setStrain] = useState({
//     name: "",
//     type: "",
//     mood: 0,
//     is_avibe: false,
//     image: "",
//   });

//   const updateStrain = (updatedStrain) => {
//     axios
//       .put(`${API}/strains/${id}`, updatedStrain)
//       .then(
//         () => {
//           navigate(`/strains/${id}`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const handleTextChange = (event) => {
//     setStrain({ ...strain, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setStrain({ ...strain, is_avibe: !strain.is_avibe });
//   };

//   useEffect(() => {
//     axios.get(`${API}/strains/${id}`).then(
//       (response) => setStrain(response.data),
//       (error) => navigate(`/not-found`)
//     );
//   }, [id, navigate]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateStrain(strain);
//   };

//   return (
//     <div className="editStrain">
//       <form onSubmit={handleSubmit} className="editStrainFormBox">
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={strain.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Strain Name"
//           required
//         />

//         <label htmlFor="type">Type:</label>
//         <input
//           id="type"
//           type="text"
//           name="type"
//           value={strain.type}
//           placeholder="Indica, Sativa, or Hybrid"
//           onChange={handleTextChange}
//           required
//         />

//         <label htmlFor="mood">Mood:</label>
//         <select id="mood" name="mood" value={strain.mood} onChange={handleTextChange} required>
//           <option value="">Select Mood</option>
//           <option value="1">Relaxed</option>
//           <option value="2">Happy</option>
//           <option value="3">Energetic</option>
//           <option value="4">Creative</option>
//           <option value="5">Sleepy</option>
//           <option value="6">Focused</option>
//         </select>

//         <label htmlFor="is_avibe">Is a vibe:</label>
//         <input
//           id="is_avibe"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={strain.is_avibe}
//         />

//         <label htmlFor="image">Image URL:</label>
//         <input
//           id="image"
//           type="text"
//           pattern="http[s]*://.+"
//           value={strain.image}
//           placeholder='Add url, beginning with: "http://"'
//           onChange={handleTextChange}
//           required
//         />

//         <br />
//         <input className="editSubmitButton" type="submit" />
//         <Link to={`/strains/${id}`}>
//           <button className="editCancelButton">Cancel</button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default EditStrainForm;
