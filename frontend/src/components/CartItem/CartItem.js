import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchProduct, getProduct } from "../../store/products";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { updateCartItem, deleteCartItem } from "../../store/cartItems";
import './cartItem.css';


function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState(cartItem.options);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const product = useSelector(getProduct(cartItem.productId));

  useEffect(() => {
    dispatch(fetchProduct(cartItem.productId));
  }, []);

  const handleQuantityChange = (e) => {
    e.preventDefault();
    const newQuantity = e.target.value;
    setQuantity(newQuantity)

    const newCartQuantity = {
        id: cartItem.id,
        product_id: cartItem.product_id,
        options: cartItem.options,
        quantity: newQuantity
    }

    dispatch(updateCartItem(newCartQuantity));
  }

  const handleSizeChange = (e) => {
    e.preventDefault();
    const newSize = e.target.value;
    setSize(newSize)

    const newCartItemSize = {
        id: cartItem.id,
        product_id: cartItem.product_id,
        options: newSize,
        quantity: cartItem.quantity
    }

    dispatch(updateCartItem(newCartItemSize));
  }

  const quantities = [...Array(10)];
  const sizes = [];
  for (let i = 0; i < 17; i++) {
    const size = i * 0.5 + 6;
    sizes.push(size);
  }

  // console.log(product);


  return product ?  (
    <>  
      <div className="cart-item-container">
        <div className="cart-item-photo">
          <img src={product.photoUrl} alt={product.name} />
        </div>

        <div className="product-description-and-stuff">
          <div className="product-name">
            <p>{product.name}</p>
          </div>
          
          <div className="size" >
            <label>Size:      </label>
            <select value={size} onChange={handleSizeChange} className="sizes-options">
              {sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="quantity">
            <label> Quantity:     </label> 
            <select value={quantity} onChange={handleQuantityChange} className="quantities-options">
            {/* style={{ border: 'none' }} */}
              {quantities.map((_, index) => (
                <option key={index} value={index + 1} >
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <i id='trash-button-to-delete-cart-item' class="fa-solid fa-trash" onClick={() => dispatch(deleteCartItem(cartItem.id))}></i>
          </div>
        </div>
      </div>
    </>
  ): null;
}

export default CartItem;