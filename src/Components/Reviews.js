import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import ReviewsForm from './ReviewsForm'
import '../CSS/Reviews.css'

const API = process.env.REACT_APP_BASE_URL

function Reviews () {
    const [reviews, setReviews] = useState([])
    let { id } = useParams();

    const handleAdd = (newReview) => {
        axios
        .post(`${API}/strains/${id}/reviews`, newReview)
        .then(
            (response) => {
                setReviews([response.data, ...reviews])
            },
            (error) => console.error(error)
            )
            .catch((c) => console.warn('catch', c))
        }

        const handleEdit = (updatedReview) => {
            axios
            .put(`${API}/strains/${id}/reviews/${updatedReview.id}`, updatedReview)
            .then((response) => {
                const copyReviewArray = [...reviews];
                const indexUpdatedReview = copyReviewArray.findIndex((review) => {
                    return review.id === updatedReview.id
                })
                copyReviewArray[indexUpdatedReview] = response.data
                setReviews(copyReviewArray)
            })
            .catch((c) => console.warn('catch', c))
        }

        const handleDelete = (id) => {
            axios
            .delete(`${API}/strains/${id}/reviews/${id}`)
            .then(
                (response) => {
                    const copyReviewArray = [...reviews]
                    const indexDeletedReview = copyReviewArray.findIndex((review) => {
                        return review.id === id
                    })
                    copyReviewArray.splice(indexDeletedReview, 1)
                    setReviews(copyReviewArray)
                },
                (error) => console.error(error)
                )
                .catch((c) => console.warn('catch', c))
            }


            useEffect(() => {
                axios
                .get(`${API}/strains/${id}/reviews`)
                .then((response) => {
                    console.log(response.data)
                    setReviews(response.data)
                })
            }, [id])

            return (
                <section>
            <h2>Reviews</h2>
            <ReviewsForm handleSubmit={handleAdd}>
                <h3>Good Vibes or Nah?</h3>
            </ReviewsForm>
            {reviews.map((review) => (
                <Review
                key={review.id}
                review={review}
                handleSubmit={handleEdit}
                handleDelete={handleDelete} />
                ))}
        </section>
    )
}

export default Reviews;


