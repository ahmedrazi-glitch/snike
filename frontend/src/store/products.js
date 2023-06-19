// Export the following action constants and write the corresponding action creators 

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const receiveProducts = (products) => {
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
  const res = await fetch('api/products');
  const products = await res.json();
  return dispatch(receiveProducts(products));
}

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`api/products/${productId}`);
  const product = await res.json();
  return dispatch(receiveProduct(product));
}

const productsReducer = (state={}, action) => {
  const nextState = {...state};

  switch(action.type) {
    case RECEIVE_PRODUCT:
      return { ...nextState, [action.product.id]: action.product }
    case RECEIVE_PRODUCTS:
      return { ...nextState, ...action.products }
    default: 
      return state;
  }
}

export default productsReducer;


