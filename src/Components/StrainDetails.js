
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

import axios from "axios";

const API = process.env.REACT_APP_BASE_URL

function StrainDetails() {
    const { id } = useParams();
    const [strain, setStrain] = useState({});
    const navigate = useNavigate();

    const deleteStrain = () => {
        axios
        .delete(`${API}/strains/${id}`)
        .then(
            () => {
                navigate(`/strains`)
            }
        )
        .catch((c) => console.warn('catch', c))
    };
    const handleDelete = () => {
        deleteStrain();
    };

    useEffect(() => {
        axios
        .get(`${API}/strains/${id}`)
        .then((response) => {
            console.log(response.data)
            setStrain(response.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])

    return (
        <div className="Show">

         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <p>
                    {strain.is_avibe ? 
                    "This is such a vibe"
                    :
                    "This strain is not a vibe"
                    }
                </p>
                    <p>{strain.name}</p>
                    <img src={strain.image} alt='strain'></img>
                    <p>type: {strain.type}</p>
                    <p>mood: {strain.mood}</p>
                    <p>vibe: {strain.is_avibe}</p>
                    <div classname="buttons">
                        <>
                    <link to={`/strains`}>
                        <button>Back</button>
                        </link>
                        </>
                        <>
                        <link to={`/strains/${strain.id}/edit`}>
                            <button>Edit</button>
                            </link>
                        </>
                        <>
                        <button onClick={handleDelete}>Delete</button>
                        </>
                        </div>
                        </div>
                        </div>
    )
                }

                export default StrainDetails; 
              