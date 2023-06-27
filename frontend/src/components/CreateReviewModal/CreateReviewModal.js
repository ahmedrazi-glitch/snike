import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createReview } from "../../store/reviews";
import './createReviewModal.css';
import { useParams } from "react-router-dom";

function CreateReviewModal({ onCancel }) {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');

  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const [errors, setErrors] = useState([]);
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleRatingChange = (e) => {
    e.preventDefault()
    setRating(e.target.value);
  };

  const newReview = {
    title: title,
    body: body,
    rating: rating,
    product_id: productId
  }

  // const validateReview = () => {
  //   // let hasErrors = false;
  //   if (title === "") {
  //       setTitleError("Title is required");
  //       // hasErrors = true;
  //   } else {
  //       setTitleError("");
  //   }
  //   if (body === "") {
  //       setBodyError("Body is required");
  //       // hasErrors = true;
  //   } else {
  //       setBodyError("");
  //   }
  //   if (rating === 0 || rating > 5 || rating < 1) {
  //       setRatingError("Rating must be between 1 and 5");
  //       // hasErrors = true;
  //   } else {
  //       setRatingError("");
  //   }
  //   // return hasErrors;
  // };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    // const errors = validateReview();
    // if (errors) {

    // setErrors([]);

    // // ... your existing code to create the new review object
    
    // try {
    //   await dispatch(createReview(newReview));
    //   // Review creation succeeded, perform any necessary actions
    // } catch (error) {
    //   let data;
    //   try {
    //     if (error.response) {
    //       data = await error.response.json();
    //     } else {
    //       throw new Error('Network response error');
    //     }
    //   } catch (e) {
    //     data = e.message;
    //   }
    //   if (data?.errors) {
    //     setErrors(data.errors);
    //   } else if (data) {
    //     setErrors([data]);
    //   } else {
    //     setErrors([error.response.statusText]);
    //   }
    // }

    // }
    dispatch(createReview(newReview));
    dispatch(onCancel);
  };


  return (
    <>
      <div className="create-modal" onClick={onCancel}>
        <div className="create-modal-content" onClick={(e) => e.stopPropagation()}>
          <form className="create-review-form" onSubmit={handleSubmit}>

        <ul className="reviewForm-error-list">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>


            <div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Body"
                value={body}
                onChange={handleBodyChange}
                required
              ></textarea>
            </div>
            <div className="star-rating">
              {/* {[1, 2, 3, 4, 5].map((star) => ( */}
                {/* // <i
                //   key={star}
                //   className={`fa-thin fa-star ${
                //     star <= rating ? "selected" : ""
                //   }`}
                  onClick={() => handleRatingChange(star)}
                ></i> */}
              {/* // ))} */}
              <div className="editRating" >
                <label></label>
                <input type="number" value={rating} onChange={handleRatingChange} required />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateReviewModal;