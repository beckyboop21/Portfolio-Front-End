import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewsForm from "../Components/ReviewsForm";

const API = process.env.REACT_APP_API_URL;

function Reviews() {

    const [reviews, setReviews] = useState([]);
    let {id} = useParams(); 

    useEffect(() => {
        axios.get(`strains/${id}/reviews`)
        .then((res) => {
            console.log(res.data)
            setReviews(res.data)
        })
    }, [id])

    const handleAdd = (newReview) => {
        axios.post(`${API}/strains/${id}/reviews`, newReview)
        .then((res) => {
            console.log(res)
            setReviews([res.data, ...reviews])
        }).catch(console.error)
    }

    return (
        <section className="reviews">
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
            <ReviewsForm handleSubmit={handleAdd} />
        </section>
    );
}

export default Reviews;
