import { useState } from "react";
import ReviewsForm from "./ReviewsForm";
import axios from "axios";

function Review ({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false)

    const toggleView = () => {
      toggleEditForm(!viewEditForm)
    }

    const { reviewer, rating, content, id } = review;

  return (
    <div className="review">
      {viewEditForm ? (
      <ReviewsForm 
        commentDetails={review}
        toggleView={toggleView}
        handleSubmit={handleSubmit} 
        />
        ) : (

        <div>
          <h4>
          {reviewer}
          </h4>
          <h6>
            {rating}
          </h6>
          <h5>
            {content}
          </h5>
          <button onClick={toggleView}>Edit Review</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
          </div>

          )}
          </div>
    )
}

export default Review;

