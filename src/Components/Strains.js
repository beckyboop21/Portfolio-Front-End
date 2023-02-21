import axios from "axios";
import { useState, useEffect } from "react";
import Strain from "./Strain";

const API = process.env.REACT_APP_API_URL;

function Strains() {

  const [strains, setStrains] = useState([])

useEffect(() => {
  console.log("Use Effect Ran")
  axios
  .get(`${API}/strains`)
  .then((response) => 
setStrains(response.data))
  .catch ((c) => console.warn("catch", c));
},[])

  // This will run twice first and last Use effect runs 2nd 
  return (
    <div className="Strains">
      {console.log("I rendered first")}
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this strain</th>
            </tr>     
          </thead>
          <tbody>
            {/* // key is not a prop  */}
            {strains.map((strain) => {
              return <Strain key={strain.id} strain={strain} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Strains;
