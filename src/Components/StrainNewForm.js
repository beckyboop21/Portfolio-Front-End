import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

function StrainNewForm() {
  let navigate = useNavigate();

  const [strain, setStrain] = useState({
    name: "",
    type: "",
    mood: "",
    is_avibe: false,
    image: "",
  });
  const addStrain = (newStrain) => {
    axios
    .post(`${API}/strains`, newStrain)
    .then(
        () => {
            navigate(`/strains`)
        },
        (error) => console.error(error)
    )
    .catch((c) => console.warn('catch', c))
}

  const handleTextChange = (event) => {
    setStrain({ ...strain, [event.target.id]: event.target.value });
  };
 
//   const handleSelectChange = (event) => {
//     setStrain({ ...strain, is_avibe: event.target.value });
//   };
  const handleSubmit = (event) => { 
    event.preventDefault()
    addStrain(strain)
  }
//     const imageInput = document.querySelector("https://cannabisnationinc.com/wp-content/uploads/2020/06/8df2d26fde38e469dd54c4b3fbe3c2a2-1080x675.jpg");
//     const imageFile = imageInput.files[0];

//     addStrain(strain, imageFile);
// }

//   console.log(strain);

return (
    <div>
     <form onSubmit={handleSubmit}>
  <table>
    <tr>
      <td><label htmlFor="name">Name:</label></td>
      <td>
        <input
          id="name"
          type="text"
          value={strain.name}
          onChange={handleTextChange}
          required
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="type">Type:</label></td>
      <td>
        <input
          id="type"
          type="text"
          value={strain.type}
          onChange={handleTextChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="mood">Mood:</label></td>
      <td>
        <input
          id="mood"
          type="text"
          value={strain.mood}
          onChange={handleTextChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="is_avibe">Is A Vibe:</label></td>
      <td>
        <label htmlFor="true">True</label>
        <input
          type="radio"
          id="is_avibe"
          name="is_avibe"
          value="true"
          checked={strain.is_avibe === true}
          onChange={handleTextChange}
        />
        <label htmlFor="false">False</label>
        <input
          type="radio"
          id="is_avibe"
          name="is_avibe"
          value="false"
          checked={strain.is_avibe === false}
          onChange={handleTextChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="image">Image:</label></td>
      <td>
        <input
          id="image"
          type="text"
          value={strain.image}
          onChange={handleTextChange}
        />
      </td>
    </tr>
  </table>
  <button className="submit" type="submit">Submit</button>
</form>
<Link to={`/strains`}>
  <button className="back-button">Back</button>
</Link>

    </div>
  );
}

export default StrainNewForm;
