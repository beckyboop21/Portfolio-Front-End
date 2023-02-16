import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function StrainDetails() {
  const [strain, setStrain] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  // Inside StrainDetails function
  const handleDelete = () => {
    axios
      .delete(`${API}/strains/${id}`)
      .then(
        () => {
          navigate(`/strains`);
        },
        (error) => console.error(error) //normally for 404 errors when item is not found
      )
      .catch((c) => console.warn("catch", c)); //for 500 error for server errors
  };

  useEffect(() => {
    axios
      .get(`${API}/strains/${id}`)
      .then((response) => {
        setStrain(response.data);
      })
      .catch(() => {
        navigate("/error");
      });
  }, [id]);

  return (
    <article className="StrainDetails">
      <div className="strainShowBox">
        <h4 className="strainName strainShowBoxHdg">{strain.name}</h4>
        <img
          className="strainimg"
          src={
            strain.image
              ? strain.image
              : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"
          }
          alt="image not found"
        />
        <h3>{strain.is_avibe ? <span>❤️</span> : <span>♡</span>}</h3>

        <span className="strainSpec">Fiber: {strain.fiber} | </span>
        <span className="snackSpec">Protein: {strain.protein} | </span>
        <span className="strainSpec">Mood: {strain.mood}</span>
        <br />

        <div className="showNavigation">
          <Link to={`/strains`}>
            <button>Back</button>
          </Link>

          <Link to={`/strains/${id}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>

          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="strainLinkBox">
        <h4 className="strainLinkBoxHdg">View Other Strains</h4>
        {strain.relatedStrains &&
          strain.relatedStrains.map((relatedStrain) => {
            return (
              <div key={relatedStrain.id} className="strainLinkData">
                <img
                  style={{ height: 25, width: 25 }}
                  src={
                    relatedStrain.image
                      ? relatedStrain.image
                      : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"
                  }
                  alt="related strain"
                />
                <Link to={`/strains/${relatedStrain.id}`}>
                  {relatedStrain.name}
                </Link>
              </div>
            );
          })}
      </div>
    </article>
  );
}

export default StrainDetails;
