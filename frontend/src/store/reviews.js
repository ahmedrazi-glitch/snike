import csrfFetch from "./csrf";
import { RECEIVE_PRODUCT } from "./products";

const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews 
  }
}

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review 
  }
}

const removeReview = (reviewId) => {
  return {
      type: REMOVE_REVIEW,
      reviewId
  }
};

// The following are selectors 

export const getReview = (reviewId) => state => {
  return state.reviews ? state.reviews[reviewId] : null ;
}

export const getReviews = (state) => {
  return state.reviews ? Object.values(state.reviews) : [] ;
}

// export const fetchReview = (reviewId) => async (dispatch) => {
//   const response = await fetch(`/api/reviews/${reviewId}`);
  
//   if (response.ok) {
//       const review = await response.json();
//       dispatch(recieveReview(review));
//   }
// }

export const createReview = (review) => async (dispatch) => {
  const response = await csrfFetch('/api/reviews', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
  });

  if (response.ok) {
      const newReview = await response.json();
      dispatch(receiveReview(newReview));
  } else {
      const errors = await response.json();
      return errors;
  }
}

export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
  });

  if (response.ok) {
      dispatch(removeReview(reviewId));
  }
}

export const updateReview = (review) => async(dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });
  if (response.ok) {
      const data = await response.json();
      dispatch(receiveReview(data));
  }
}

const reviewsReducer = (state={}, action) => {
  const nextState = {...state};

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return { ...action.reviews  }
    case RECEIVE_REVIEW:
      // debugger
      return { ...nextState, [action.review.id]: action.review }
      case REMOVE_REVIEW:
        delete nextState[action.reviewId]
        return nextState;
    default: 
      return state;
  }
}

export default reviewsReducer;

