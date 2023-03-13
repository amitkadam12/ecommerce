import React from 'react'
import "./home.css"
import featuresf1 from "../../image/features/f1.png"
import featuresf2 from "../../image/features/f2.png"
import featuresf3 from "../../image/features/f3.png"
import featuresf4 from "../../image/features/f4.png"
import featuresf5 from "../../image/features/f5.png"
import featuresf6 from "../../image/features/f6.png"
import { Link } from 'react-router-dom'
export default function Home({ handleClick }) {
  return (
    <>
    <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>super value deals</h2>
        <h1>on all product</h1>
        <p>Save more couper & up to 70% off!</p>
        <Link to='/shop'><button className='blink'>shop now</button></Link>
    </section>
    <section id="feature" classNam="section-p1">
        <div classNam="fe-box">
            <img src={featuresf1} alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div classNam="fe-box">
            <img src={featuresf2} alt=""/>
            <h6>Online Order</h6>
        </div>
        <div classNam="fe-box">
            <img src={featuresf3} alt=""/>
            <h6>Save Money</h6>
        </div>
        <div classNam="fe-box">
            <img src={featuresf4} alt=""/>
            <h6>Pramotion</h6>
        </div>
        <div classNam="fe-box">
            <img src={featuresf5} alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div classNam="fe-box">
            <img src={featuresf6}alt=""/>
            <h6>Support</h6>
        </div>
      


    </section>
    <section id="banner" className="section-m1">
        <h4>Repaire Services</h4>
        <h2>Up to <span>70% off</span> All t-shirts & Accessories</h2>
        <button className="normal"> Exlpore More</button>

    </section>
    <section id="sm-banner" className="section-p1">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>the best classic dess is sale at </span>
            <button className="white" >Leanr more</button >
        </div>
        <div className="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcomming Season</h2>
            <span>the best classic dess is sale at </span>
            <button className="white" >Collection</button >
        </div>


    </section>
    <section id="banner3">

       <div className="banner-box">
        <h2>SEASONAL SALE</h2>
        <h3>Winter Collection -50% OFF</h3>
       </div>
       <div className="banner-box banner-box2">
        <h2>NEW FOOTWEAR COLLECTION</h2>
        <h3>Spring/Summer 2022</h3>
       </div>
       <div className="banner-box banner-box3">
        <h2>T-SHIRTS</h2>
        <h3>Winter Collection -50% OFF</h3>
       </div>

    </section>
    <section id="newslatter" className="section-p1 section-m1" >
        <div className="newstext">
            <h4>sing Up for Newlatter</h4>
            <p> Get E-mail update about our latest shop and <span> special offers.</span> </p>
        </div> 
        <div className="form">
            <input type="text" placeholder="  YOUR E-MAIL ADDRESS "/>
            <button className="normal">Sign Up</button>
        </div>

    </section>

    </>
   
    
  )
}
