import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// const API = process.env.REACT_APP_API_URL;

function StrainFormEdit() {
  const { id } = useParams();
  const navigate = useNavigate();



  const [strain, setStrain] = useState({
    name: "",
    type: "",
    mood: "",
    is_avibe: false,
    image: ""
  });

  const updateStrain = (updatedStrain) => {
    axios.put(`${API}/strains/${id}`, updatedStrain)
      .then(() => {
        navigate(`strains/${id}`);
      },
      (error) => console.error(error))
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setStrain({ ...strain, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setStrain({ ...strain, is_avibe: !strain.is_avibe });
  };

  useEffect(() => {
    axios.get(`${API}/strains/${id}`)
      .then((response) => setStrain(response.data))
      .catch((error) => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStrain(strain);
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
          onChange={handleTextChange}
          // placeholder="Image" required/>
  

export default StrainFormEdit;



