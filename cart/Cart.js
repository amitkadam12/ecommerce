import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = ({ cart, setCart, handleChange,size }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
      <>
        <section id="cart" class="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
                <tr>
                    <td><Link to="#"onClick={() => handleRemove(item.id)}><i class="fa fa-times-circle icon2"></i></Link></td>
                    <td><img src={item.img}
                            alt="abc"/></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td id='btn2'><button onClick={() => handleChange(item, 1)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={() => handleChange(item, -1)}>-</button></td>
                    <td>${item.price * item.amount}</td>
                </tr>
               ))} 
            </tbody>
        </table>
    </section>
    <section id="cart-add" class="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon"/>
                <button class="normal">Apply</button>
            </div>
        </div>
        <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>${price}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${price}</strong></td>
                </tr>
            </table>
            <button class="normal">Proceed to checkout</button>
        </div>
    </section>
      </>
  );
};

export default Cart;
