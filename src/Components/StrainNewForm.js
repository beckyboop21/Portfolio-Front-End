
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

 const API = process.env.REACT_APP_API_URL;

function StrainNewForm(){
    let navigate = useNavigate();

    const [strain, setStrain] = useState({
          name: "",
          type: "",
          mood: 0, 
          is_avibe: false,
          image: ""
        }); 

        const addStrain = (newStrain) => {
            axios
              .post(`${API}/strains`, newStrain)
              .then(
                () => {
                  navigate(`/strains`);
                },
                (error) => console.error(error)
              )
              .catch((c) => console.warn("catch", c));
          };
            
    const handleSubmit = (event) => { 
        event.preventDefault();
        addStrain(strain);
        
    };

    const handleTextChange = (event) => {
        setStrain({...strain, [event.target.id]: event.target.value})
    }

    const handleSelectChange = (event) => {  //handles the radio change
        setStrain(event.target.value)
    }
//str

console.log(strain); //try opening you inspector and typing the form..what warning 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                name="name"
                value={strain.name}
                onChange={handleTextChange}
                placeholder="Name"
                />

                <label htmlFor="type">Type:</label>
                <input
                id="type" //<<<<<<typo here  testing now 
                type="text"
                name="type"
                value={strain.type}
                onChange={handleTextChange}
                /> <br></br>

                <label htmlFor="mood">Mood:</label>
                <input
                id="mood"
                type="text"
                name="mood"
                value={strain.mood}
                onChange={handleTextChange}
                /> <br></br>
        <label htmlFor="is_avibe">Love it </label>
      <input 
      type="radio" 
      id="is_avibe" 
      name="is_avibe" 
      value={strain.is_avibe} 
      checked 
      onChange={handleSelectChange}
     /> <br></br>

      <label htmlFor="is_avibe">nah I'm good </label>
      <input type="radio"
       id="is_avibe"
        name="is_avibe"
         value={strain.is_avibe}
         onChange={handleSelectChange}
         />

                <label htmlFor="image">Image:</label> 
                <input
                id="image"
                type="text"
                name="image"
                pattern='http[s]*://.+'    
               
                value={strain.image}
                onChange={handleTextChange}
                />

                <button className="submit" type="submit">Submit</button>
            </form>

            <Link to={`/strains`}>
                <button className="back-button">Back</button>
            </Link>
        </div>
    )
}

export default StrainNewForm;












