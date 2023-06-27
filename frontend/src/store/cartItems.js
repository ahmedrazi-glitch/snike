import csrfFetch from "./csrf";

export const RECIEVE_CART_ITEMS = 'cartItems/RECIEVE_CART_ITEMS';
export const RECIEVE_CART_ITEM = 'cartItems/RECIEVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'cartItems/REMOVE_CART_ITEM';

export const receiveCartItems = (cartItems) => {
  // debugger
  return {
    type: RECIEVE_CART_ITEMS,
    cartItems
  }
}

export const receiveCartItem = (cartItem) => {
  // debugger
  return {
    type: RECIEVE_CART_ITEM,
    cartItem
  }
}

export const removeCartItem = (cartItemId) => {
  // debugger
  return {
    type: REMOVE_CART_ITEM,
    cartItemId
  }
}

export const getCartItem = (cartItemId) => state => {
  return state.CartItems ? state.CartItems[cartItemId] : null ;
}

export const getCartItems = (state) => {
  return state.cartItems ? Object.values(state.cartItems) : [] ;
}

export const fetchCartItems = () => async(dispatch) => {
 
  const res = await fetch('/api/cart_items');
  const cartItems = await res.json();
  return dispatch(receiveCartItems(cartItems));
}

export const fetchCartItem = (cartItemId) => async (dispatch) => {
  const response = await fetch(`/api/cart_items/${cartItemId}`);
  if (response.ok) {
      const cartItem = await response.json();
      dispatch(receiveCartItem(cartItem));
  }
}

export const createCartItem = (cartItem) => async (dispatch) => {
  const response = await csrfFetch('/api/create_items', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cartItem)
  });

  if (response.ok) {
    const newItem = await response.json();
    dispatch(receiveCartItem(newItem));
  } else {
    const errors = await response.json();
    return errors;
  }
}

export const updateCartItem = (cartItem) => async(dispatch) => {
  const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cartItem)
  });
  if (response.ok) {
      const cartItem = await response.json();
      dispatch(cartItem(cartItem));
  }
}

export const deleteCartItem = (cartItemId) => async (dispatch) => {
  const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removeCartItem(cartItemId));
  }
}

const cartItemsReducer = (state={}, action) => {
  const nextState = {...state};

  switch(action.type) {
    case RECIEVE_CART_ITEMS:
      return { ...action.cartItems  }
    case RECIEVE_CART_ITEM:
      // debugger
      return { ...nextState, [action.cartItem.id]: action.cartItem }
      case REMOVE_CART_ITEM:
        delete nextState[action.cartItemId]
        return nextState;
    default: 
      return state;
  }
}

export default cartItemsReducer;