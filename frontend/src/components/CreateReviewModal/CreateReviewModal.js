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

  const [activeRating, setActiveRating] = useState(0);

  const [errors, setErrors] = useState([]);
  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleRatingChange = (e) => {
    // e.preventDefault();
    setRating(e);
  };

  const newReview = {
    title: title,
    body: body,
    rating: rating,
    product_id: productId
  }

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    // debugger
    dispatch(createReview(newReview));
    dispatch(onCancel);
  };


  return (
    <>
      <div className="create-modal" onClick={onCancel}>
        <div className="create-modal-content" onClick={(e) => e.stopPropagation()}>

          <div className="create-review-header">
            <p>Write a Review</p>
          </div>

          <div className="create-review-subheader">
            <p>Share your thoughts with the community.</p>
          </div>

          <form className="create-review-form" onSubmit={handleSubmit}>

          <ul className="reviewForm-error-list">
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>

            <div className="ratings-header">
              <p>Overall Ratings</p>
              <h1>*</h1>
            </div>


            <div className="rating-input">
              <div 
                className={activeRating >= 1 ? "filled" : "empty"} 
                onMouseEnter={() => setActiveRating(1)} 
                onMouseLeave={() => setActiveRating(rating)}
                onClick={() => handleRatingChange(1)} 
              >
                <i class="fa fa-star"></i>       
              </div>
              <div 
                className={activeRating >= 2 ? "filled" : "empty"} 
                onMouseEnter={() => setActiveRating(2)} 
                onMouseLeave={() => setActiveRating(rating)} 
                onClick={() => handleRatingChange(2)} 
              >
                <i class="fa fa-star"></i>
              </div>
              <div 
                className={activeRating >= 3 ? "filled" : "empty"} 
                onMouseEnter={() => setActiveRating(3)} 
                onMouseLeave={() => setActiveRating(rating)} 
                onClick={() => handleRatingChange(3)} 
              >
                <i class="fa fa-star"></i>
              </div>
              <div 
                className={activeRating >= 4 ? "filled" : "empty"} 
                onMouseEnter={() => setActiveRating(4)} 
                onMouseLeave={() => setActiveRating(rating)} 
                onClick={() => handleRatingChange(4)} 
              >
                <i class="fa fa-star"></i>
              </div>
              <div 
                className={activeRating >= 5 ? "filled" : "empty"} 
                onMouseEnter={() => setActiveRating(5)} 
                onMouseLeave={() => setActiveRating(rating)} 
                onClick={() => handleRatingChange(5)} 
              >
                <i class="fa fa-star"></i>
              </div>
            </div>

            <div className="review-body-title">
              <p>Your Review</p>
              <h1>*</h1>
            </div>

            <div className="review-body-box">
              <textarea
                // placeholder=""
                style={{ height: '192px', width: '453px', padding: '5px' }} 
                value={body}
                onChange={handleBodyChange}
                required
              ></textarea>
            </div>

            <div className="review-title-box">
              <p>Review title</p>
            </div>

            <div className="create-review-title-box">
              <textarea
                type="text"
                // placeholder="Title"
                style={{ height: '92px', width: '453px', padding: '5px' }}
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>

            <div className="star-rating">
              <div className="create-review-edit-rating" >
                <label></label>
                <input type="number" value={rating} onChange={handleRatingChange} required />
              </div>
            </div>

            <button className="create-review-button" type="submit">Submit</button>

          </form>
        </div>
      </div>
    </>
  );
}

export default CreateReviewModal;