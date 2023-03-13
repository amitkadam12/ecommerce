import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../image/logo.png'
import './navbar.css'
export default function Navbar({ size }) {
  const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active')
    })
}
  return (
    <section id="header" >
      <Link to="index.html"><img src={img1} className="logo" alt="logo" /> </Link>
      <div>
        <ul id="navbar">
          <li><Link className="active" to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link> </li>
          {/* <li id="lg-bag"><Link to='/cart' ><i className="fa-sharp fa-solid fa-bag-shopping"></i></Link></li>
          <li><span className='sup'>{size}</span></li> */}
          <li><Link to='/cart' className='cart'>
            <i className='fas fa-shopping-cart'></i>
            <span className='sup'>{size}</span>
          </Link></li>
          <Link href="#" id="close"><i className="fas fa-times"></i></Link>
        </ul>
      </div>
      <div id="mobile">
        <i id="bar" className="fas fa-outdent"></i>
        <Link className="active" to='/cart'><i class="fa-sharp fa-solid fa-bag-shopping"><span >{size}</span></i></Link>
      </div>
    </section>
  )
}
