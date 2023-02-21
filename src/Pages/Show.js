
import StrainDetails from "../Components/StrainDetails";
// import StrainkDetails from "../Components/StrainDetails";

function Show() {
  return (
    <div className="Show">
      <h2>Show</h2>
      <StrainDetails />
    </div>
  );
}

export default Show;

// import StrainDetails from "../Components/StrainDetails";
// import { useState, useEffect } from "react";
// import axios from "axios";

// //import { Link} from "react-router-dom";

// const API = process.env.REACT_APP_API_URL;

// function Show() {
//   const [strain, setstrain] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/strain`)
//       .then((response) => {
//         console.log(response.data);
//         setstrain(response.data);
//       })
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div className="show">
//       {/* <h2>Show</h2> */}
//       <StrainDetails strain={strain} />
//     </div>
//   );
// }

// export default Show;
