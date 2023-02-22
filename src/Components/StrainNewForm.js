// import axios from "axios";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

 

const StrainNewForm = () => {

    const API = process.env.REACT_APP_API_URL; //<<< it was incorrect  i typed it incorrectly >? ahhh try neowwww
    let navigate = useNavigate();

    const [strain, setStrain] = useState({
          name: "",
          type: "",
          mood: 0, //this might be a problem
          is_avibe: false, //this might be a problem 
          image: ""
        }); //try one more time 
            
    const handleSubmit = (event) => { 
        event.preventDefault();
        axios
        .post(`${API}/strains`, strain) 
        .then(
            () => {
                navigate(`/strains`)
                setStrain(" ")
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c))
    }

    const handleTextChange = (event) => {
        setStrain({...strain, [event.target.id]: event.target.value})
    }

    const handleSelectChange = (event) => {  //handles the radio change
        setStrain(event.target.value)
    }


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
                required
                />

                <label htmlFor="type">Type:</label>
                <input
                id="type" //<<<<<<typo here  testing now 
                type="text"
                name="type"
                value={strain.type}
                onChange={handleTextChange}
                />

                <label htmlFor="mood">Mood:</label>
                <input
                id="mood"
                type="text"
                name="mood"
                value={strain.mood}
                onChange={handleTextChange}
                />
        <label htmlFor="is_avibe">True</label>
      <input 
      type="radio" 
      id="is_avibe" 
      name="is_avibe" 
      value={strain.is_avibe} 
      checked 
      onChange={handleSelectChange}
     />

      <label htmlFor="is_avibe">False</label>
      <input type="radio"
       id="is_avibe"
        name="is_avibe"
         value={strain.is_avibe}
         onChange={handleSelectChange}
         />

 

                <label htmlFor="image">Image:</label> //this is okay .. i believe
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






























{/** import axios from "axios";**/}
{/* // import { useState } from "react";
// import { useNavigate } from "react-router-dom"; */}

{/** 
// const API = "http://localhost:3333";

// function StrainNewForm() {

//   let navigate = useNavigate();

//   const addStrain = (newStrain) => {
//     axios
//     // backend route 
//       .post(`${API}/strains`, newStrain)
//       .then(
//         () => {
//           navigate(`/strains`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const [strain, setStrain] = useState({
//     name: "",
//     type: "",
//     mood: 0,
//     is_avibe: false,
//     image: ""
//   });

//   const handleTextChange = (event) => {
//     setStrain({ ...strain, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setStrain({ ...strain, is_avibe: !strain.is_avibe });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addStrain(strain);
//   };
//   // on change attribute
//   return (
//     <div className="New">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={strain.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Strain Name"
//           required
//         />
//         <label htmlFor="url">URL:</label>
//         <input
//           id="url"
//           type="text"
//           pattern="http[s]*://.+"
//           value={strain.url}
//           placeholder="http://"
//           onChange={handleTextChange}
//         />
//         <label htmlFor="url">Mood:</label>
//         <input
//           id="mood"
//           type="number"
//           min="1"
//           max="5"
//           name="mood"
//           value={strain.mood}
//           placeholder="1-5"
//           onChange={handleTextChange}
//         />
//         <label htmlFor="is_avibe">Favorite:</label>
//         <input
//           id="is_avibe"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={strain.is_avibe}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default StrainNewForm;

**/}











