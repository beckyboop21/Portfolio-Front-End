// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function ReviewsForm(props) {
//   let { id } = useParams(); //url params
//   const { reviewDetails } = props;

//   const [review, setReview] = useState({
//     name: "",
//     type: "",
//     mood: 0,
//     is_avibe: "",
//     image: "",
//   });

//   const handleTextChange = (event) => {
//     setReview({ ...review, [event.target.id]: event.target.value });
//   };

//   useEffect(() => {
//     if (reviewDetails) {
//       setReview(reviewDetails);
//     }
//   }, [reviewDetails]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.handleSubmit(review, id);
//     setReview({
//       name: "",
//       type: "",
//       mood: "",
//       is_avibe: false,
//       image: "",
//     });
//   };

  // return (
  //   <div className="Edit">
  //     {props.children}
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="reviewer">Name:</label>
  //       <input
  //         id="name"
  //         value={review.name}
  //         type="text"
  //         onChange={handleTextChange}
  //         placeholder="Your name"
  // //         required
  //       />
        {/* <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
        // /> */}
        {/* <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={review.rating}
        //   onChange={handleTextChange}
        // /> */}
        // {/* <label htmlFor="content">Review:</label>
        // <textarea
        //   id="content"
        //   type="text"
        //   name="content"
        //   value={review.content}
        //   placeholder="What do you think..."
        //   onChange={handleTextChange}
        // /> */}

//         <br />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default ReviewsForm;
