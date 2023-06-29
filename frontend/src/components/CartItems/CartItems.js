import React from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartItems } from "../../store/cartItems";
import CartItem from "../CartItem/CartItem";
import './cartItems.css';

function CartItems() {
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  // const cartItems = useSelector(state => Object.values(state.cart));  

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <>
      {cartItems.map((cartItem, index) => (
        <div className="cart-item" key={index}>
          <CartItem key={cartItem.id} cartItem={cartItem} />
        </div>
      ))}
    </>
  )
}

export default CartItems;