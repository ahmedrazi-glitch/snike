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
        <h4>{review.title}</h4>
        
        <div className="star-ratings">
          {Array.from({ length: 5 }, (_, i) => (
            // <i class="fa-thin fa-star" 
            //   key={i}
            //   className={`star ${i < review.rating ? 'filled' : ''}`}
            // ></i>
            <FaStar
              key={i}
              className={`star ${i < review.rating ? 'filled' : ''}`}
            />
          ))}
        </div>
          <p>{review.body}</p>

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