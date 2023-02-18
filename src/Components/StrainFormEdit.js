import React, { useState } from "react";

const initialStrainState = {
  name: "",
  category: "",
  type: "",
  mood: "",
  is_avibe: false,
  image: ""
};

function StrainFormEdit() {
  const [strain, setStrain] = useState(initialStrainState);

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setStrain((prevStrain) => ({ ...prevStrain, [id]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setStrain((prevStrain) => ({ ...prevStrain, [id]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submitting form data, e.g. with API call or other logic
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
          placeholder="Strain name"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={strain.category}
          placeholder="Indica, Sativa, Hybrid"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          value={strain.type}
          placeholder="Flower, Edible, Concentrate"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mood">Mood:</label>
        <select
          id="mood"
          value={strain.mood}
          onChange={handleTextChange}
          required
        >
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
        <label htmlFor="is_avibe">A Vibe:</label>
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
          value={strain.image}
          placeholder="https://"
          onChange={handleTextChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
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
