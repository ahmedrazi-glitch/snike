import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import './reviewsIndex.css';
import ReviewIndexItem from "../ReviewIndexItem/ReviewIndexItem";
import CreateReviewModal from "../CreateReviewModal/CreateReviewModal";

function ReviewsIndex() {
  
  const reviews = useSelector(state => Object.values(state.reviews));

  const [showModal, setShowModal] = useState(false);

  const currentUser = useSelector(state => state.session.user);

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="review-dropdown">
        {currentUser  
          ?
        <Link className="create-review-form-button-link" to={<CreateReviewModal/>} >
          <button className="create-review-form-button" onClick={handleCreateClick}>
            Create a Review
          </button>
        </Link> 
          :
        <Link to='/login' >
          <button >
            Create a Review
          </button>
        </Link>}
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <ReviewIndexItem review={review} key={review.id} />
          </div>
        ))}
      </div>

      {showModal && (
        <CreateReviewModal
          onCancel={handleModalCancel}
        />
      )}
    </>
  )
}

export default ReviewsIndex;