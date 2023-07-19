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
  const products = useSelector((state) => state.products);
 

  const totalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      const product = products[item.productId];
      if (product) {
        total += product.price * item.quantity;
      }
    });
    return total;
  };

  const totalTax = (items) => {
    let total = 0;
    items.forEach((item) => {
      const product = products[item.productId];
      if (product) {
        total += product.price * item.quantity * 0.08;
      }
    });
    return total.toFixed(2);
  };


  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <>
      <div className="container">

        <div className="cart-items-container">
          {cartItems.map((cartItem, index) => (
            <div className="all-cart-items" key={index}>
              <CartItem key={cartItem.id} cartItem={cartItem} />
            </div>
          ))}
        </div>

        <div className="shopping-summary">
          {/* <p>CartItems: </p> */}
          <div className="summary" >

            <div className="summary-title">
              <p>Summary: </p>
            </div>
            
            <div className="subtotal-title-and-amount">
              <div className="subtotal-title">
                <p>Subtotal:  </p>
              </div>
              <div className="subtotal-amount">
                <h4>${totalPrice(cartItems)}</h4>
              </div>
            </div>
            
            
            <p>Estimated Shipping and handling:</p>
            <p>Free</p>
            <h4>Estimated Tax:</h4>
            <h4>${totalTax(cartItems)}</h4>
            <p>Total: </p>
            <h4>$ {(totalPrice(cartItems) + (totalTax(cartItems) * 1)).toFixed(2)}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default CartItems;