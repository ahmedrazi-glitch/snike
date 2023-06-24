// Export the following action constants and write the corresponding action creators 

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';

export const receiveProduct = (payload) => {
  // debugger
  return {
    type: RECEIVE_PRODUCT,
    product: payload.product,
    reviews: payload.reviews
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

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  if (res) {
    const data = await res.json();
    // console.log(data);
    return dispatch(receiveProduct(data));
  }
}

const productsReducer = (state={}, action) => {
  const nextState = {...state};
  // let nextState;
  // debugger
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      // debugger
      return { ...nextState, ...action.products }
    case RECEIVE_PRODUCT:
      // debugger
      return { ...nextState, [action.product.id]: action.product }
    default: 
      return state;
  }
}

export default productsReducer;


