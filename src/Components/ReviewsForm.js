import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ReviewForm(props) {
    let { id } = useParams()
    const { reviewDetails } = props

    const [review, setReview] = useState({
        reviewer: '',
        rating: 0,
        content: '',
        strain_id: id
    })

    const handleTextChange = (event) => {
        setReview({ ...review, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        if (reviewDetails) {
            setReview(reviewDetails)
        }
    }, [id, reviewDetails, props])

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleSubmit(review, id)
        if (reviewDetails) {
            props.toggleView()
        }
        setReview({
            reviewer: '',
            rating: '',
            content: '',
            strain_id: id
        })
    }

    return (
        <div className='edit'>
            {props.children}
            <form onSubmit={handleSubmit}>

                <label htmlFor='review'>Name:</label>
                <input
                id='reviewer'
                value={review.reviewer}
                type='text'
                onChange={handleTextChange}
                required
                />

                <label htmlFor='rating'>Rating:</label>
                <input
                id='rating'
                type='number'
                name='rating'
                min='0'
                max='10'
                step='1'
                value={review.rating}
                onChange={handleTextChange}
                required
                />

                <label htmlFor='content'>Review:</label>
                <input
                id='content'
                name='content'
                value={review.content}
                type='text'
                onChange={handleTextChange}
                required
                />

                <br />

                <input type='submit' />
            </form>
        </div>
    )
}

export default ReviewForm;


