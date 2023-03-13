import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
const Cards = ({ item, handleClick }) => {
  const { img, title, instock, price, size } = item;

  return (
    <div>
      <div className='product-box'>
        <img src={img} alt='apple' />
        <strong>{title}</strong>
        <span className='quantity'>Size: {size}</span>
        <span className='price'>{price} $</span>
        <span className='quantity'>In Stock: {instock}</span>
        <Link href='#' className='cart-btn' onClick={() => handleClick(item)}>
          <i className='fa fa-shopping-bag'></i>Add To Cart
        </Link>
        <Link href='#' className='like-btn' onClick={() => handleClick(item)}>
          <i className='fa fa-heart'></i>
        </Link>
      </div>
      {/* <div class="pro-container">
        <div class="pro" onclick="window.location.href='sproduct.html';">
          <img src={img} alt=""/>
            <div class="des">
              <h5>{title}</h5>
              <span>{kg}KG</span>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>${price}</h4>
            </div>
            <Link href="#"><i class="fa-sharp fa-solid fa-cart-shopping icons"onClick={() => handleClick(item)}></i></Link>
        </div>
      </div> */}
      </div>
      );
};

      export default Cards;