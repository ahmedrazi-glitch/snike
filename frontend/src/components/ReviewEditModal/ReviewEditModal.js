import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateReview } from "../../store/reviews";
import './reviewEditModal.css';

function ReviewEditModal({ review, onCancel }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);
  const [rating, setRating] = useState(review.rating);

  const [activeRating, setActiveRating] = useState(review.rating);

  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    e.preventDefault()
    setBody(e.target.value);
  };

  const handleRatingChange = (e) => {
    // e.preventDefault()
    // setRating(e.target.value);
    setRating(parseInt(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReview({ ...review, title, body, rating }));
    dispatch(onCancel);
  };


  return (
    <>
      <div className="modal" onClick={onCancel}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

          <div className="edit-review-header">
            <p>Edit a Review</p>
          </div>

          <form className="editForm" onSubmit={handleSubmit}>

            <div className="ratings-header">
              <p>Overall Ratings</p>
              <h1>*</h1>
            </div>


            <div className="edit-review-rating-input">
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

            <div className="edit-review-body-header">
              <p>Your Review</p>
            </div>

            <div className="edit-body-box" >
              {/* <label>Body:</label> */}
              <textarea 
                value={body} 
                onChange={handleBodyChange} 
                style={{ height: '192px', width: '453px', padding: '5px' }}
              />
            </div>

            <div className="edit-review-title">
              <p>Review title</p>
            </div>

            <div className="edit-form-title" >
              {/* <label>Title:</label> */}
              <textarea 
                type="text" 
                value={title} 
                onChange={handleTitleChange}
                style={{ height: '92px', width: '453px', padding: '5px' }}
              />
            </div>

            <div className="editRating" >
              {/* <label>Rating:</label> */}
              <input type="number" value={rating} onChange={handleRatingChange} />
            </div>

            <div className="edit-review-modal-buttons">
              <div className="edit-review-submit-button">
                <button type="submit">Submit</button>
              </div>

              <div className="edit-review-cancel-button">
                <button type="button" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default ReviewEditModal;