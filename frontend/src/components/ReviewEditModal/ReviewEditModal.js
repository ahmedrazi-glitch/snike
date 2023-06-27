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

  const handleTitleChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    e.preventDefault()
    setBody(e.target.value);
  };

  const handleRatingChange = (e) => {
    e.preventDefault()
    setRating(e.target.value);
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
          <h2>EDIT REVIEW</h2>
          <form className="editForm" onSubmit={handleSubmit}>
            <div className="editTitle" >
              <label>Title:</label>
              <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            <div className="editBody" >
              <label>Body:</label>
              <textarea value={body} onChange={handleBodyChange} />
            </div>
            <div className="editRating" >
              <label>Rating:</label>
              <input type="number" value={rating} onChange={handleRatingChange} />
            </div>
            <div className="modal-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReviewEditModal;