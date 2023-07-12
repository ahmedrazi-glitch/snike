import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { IoPencilOutline } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';
import { deleteReview, updateReview } from "../../store/reviews";
import ReviewEditModal from "../ReviewEditModal/ReviewEditModal";
import './reviewIndexItem.css';


function ReviewIndexItem({review}) {
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [editingReview, setEditingReview] = useState(null); 

  const handleEditClick = () => {
    setEditingReview(review);
    setShowModal(true);
  };

  const handleModalSubmit = (updatedReview) => {
    dispatch(updateReview(updatedReview));
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const isCurrentUserReview = currentUser && review.userId === currentUser.id;

  return (
    <>
      <div className="review" key={review.id}>
        <div className="review-title" >
          <h4>{review.title}</h4>
        </div>
        
        <div className="star-ratings">
          {/* {[...Array(review.rating)].map((_, i) => (
            <i key={i} className="fas fa-star" />
          ))}
          {[...Array(5 - review.rating)].map((_, i) => (
            <i key={i} className="far fa-star" />
          ))} */}
          {Array.from({ length: review.rating }, (_, i) => (
            <i key={i} className="fas fa-star" />
          ))}
          {Array.from({ length: 5 - review.rating }, (_, i) => (
            <i key={i} className="far fa-star" />
          ))}
        </div>

        <div className="review-body">
          <p>{review.body}</p>
        </div>

          {isCurrentUserReview && (
            <>
              <button className="review-EditButton" onClick={handleEditClick} >
                <IoPencilOutline /> 
              </button>

              <button className="review-deleteButton" onClick={() => dispatch(deleteReview(review.id))} >
                <BsTrash /> 
              </button>
            </>
          )}
      </div>  

      {showModal && (
        <ReviewEditModal
          review={editingReview}
          onSubmit={handleModalSubmit}
          onCancel={handleModalCancel}
        />
      )}
    </>
  );
}

export default ReviewIndexItem;