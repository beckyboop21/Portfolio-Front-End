import axios from "axios";
import { useState, useEffect } from "react";
import Strain from "./Strain";

const API = process.env.REACT_APP_API_URL;

function Strains() {

  const [strains, setStrains] = useState([])

useEffect(() => {
  axios.get(`${API}/strains`).then((res) => {
setStrains(res.data)
  }).catch ((error) => console.error)
},[])


  return (
    <div className="Strains">
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
