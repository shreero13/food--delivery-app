import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

    const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((item, index) => {
          const id = item._id || item.id;
          const quantity = cartItems?.[id];

          if (quantity > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item" key={index}>
                  <p>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </p>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{quantity}</p>
                  <p>${(item.price * quantity).toFixed(2)}</p>
                  <p>
                    <span onClick={() => removeFromCart(id)}>x</span>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>if you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input className="proceed" type="text" placeholder="promo code" />
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
