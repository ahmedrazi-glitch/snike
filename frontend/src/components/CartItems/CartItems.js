import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartItems } from "../../store/cartItems";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import GoodbyeModal from "../GoodbyeModal/GoodbyeModal";
import './cartItems.css';

function CartItems() {
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const products = useSelector((state) => state.products);

  const [showModal, setShowModal] = useState(false);

  const handleGoodbyeClick = () => {
    // debugger
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };
 

  const totalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      const product = products[item.productId];
      if (product) {
        total += product.price * item.quantity;
      }
    });
    return total.toFixed(2);
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
                <h4>$ {totalPrice(cartItems)}</h4>
              </div>
            </div>
            
            <div className="shipping-info">
              <div className="estimated-shipping-and-handling">
                <p>Estimated shipping and handling:</p>
              </div>
              <div className="shipping-always-free"> 
                <p>Free</p>
              </div>
            </div>
            
            <div className="tax-info">
              <div className="extimated-tax">
                <p>Estimated Tax:</p>
              </div>
              <div className="tax-amount">
                <h4>$ {totalTax(cartItems)}</h4>
              </div>
            </div>
            
            <div className="total-due-info">
              <div className="total-title">
                <p>Total: </p>
              </div>
              <div className="total-due-amount">
                <h4>$ {((totalPrice(cartItems) * 1) + (totalTax(cartItems) * 1)).toFixed(2)}</h4>
              </div>
            </div>
            
            <Link to={<GoodbyeModal/>}>
              <button className="goodbye-button" onClick={handleGoodbyeClick}>
                Checkout 
              </button>
            </Link>
          </div>
        </div>

      </div>

      {showModal && (
        <GoodbyeModal
          onCancel={handleModalCancel}
        />
      )}
    </>
  )
}

export default CartItems;