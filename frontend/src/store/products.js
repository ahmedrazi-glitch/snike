// Export the following action constants and write the corresponding action creators 
import { receiveReviews } from "./reviews";

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';

export const receiveProduct = (product) => {
  // debugger
  return {
    type: RECEIVE_PRODUCT,
    product
    // reviews: payload.reviews
  }
}

export const receiveProducts = (products) => {
  // debugger
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

// The folowing are selectors

export const getProduct = (productId) => state => {
  return state.products ? state.products[productId] : null ;
}

export const getProducts = (state) => {
  return state.products ? Object.values(state.products) : [] ;
}

// The following are thunk action creators 

export const fetchProducts = () => async(dispatch) => {
  const res = await fetch('/api/products');
  const products = await res.json();
  return dispatch(receiveProducts(products));
}

export const fetchCategoryProducts = (categoryTerm) => async(dispatch) => {
  const res = await fetch(`/api/products?category=${categoryTerm}`);
  const categoryProducts = await res.json();
  return dispatch(receiveProducts(categoryProducts));
}

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  if (res) {
    const data = await res.json();
    // debugger 
    // console.log(data);
    dispatch(receiveProduct(data.product));
    dispatch(receiveReviews(data.reviews));
  }
}

export const fetchSearchResults = (searchTerm) => async (dispatch) => {
  // debugger
  const response = await fetch(`/api/products/search?query=${searchTerm}`);
  if (response.ok) {
    // debugger
    const data = await response.json();
    // debugger
    dispatch(receiveProducts(data));
  }
};

const productsReducer = (state={}, action) => {
  const nextState = {...state};
  // let nextState;
  // debugger
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      // debugger
      // return { ...nextState, ...action.products }
      return action.products;
    case RECEIVE_PRODUCT:
      // debugger
      return { ...nextState, [action.product.id]: action.product }
    default: 
      return state;
  }
}

export default productsReducer;


