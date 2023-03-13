import React from 'react'
import img1 from '../../image/logo.png'
import app from '../../image/pay/app.jpg'
import play from '../../image/pay/play.jpg'
import pay from '../../image/pay/pay.png'
import "./footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="section-p1" style={{backgroundColor: "white"}}>
    <div className="col">
        <img src={img1} alt="" className='logo'/>
        <h4>Contact</h4>
        <p><strong>Address:</strong>A Wing, 3rd Floor, Kolte Patil City Vista, Fountain Road, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014</p>
        <p><strong>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789</p>
        <p><strong>Hours</strong>10:00 - 18:00, Mon - Fri</p>
        <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-printerest-p"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div className="col">
        <h4>About</h4>
        <Link href="#">About us</Link>
        <Link href="#">Delivery Information</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
        <Link href="#">Contact Us</Link>
    </div>
    <div className="col">
        <h4>My Account</h4>
        <Link href="#">Sign In</Link>
        <Link href="#">View Cart</Link>
        <Link href="#">My Wishlist</Link>
        <Link href="#">Track My Order</Link>
        <Link href="#">Help</Link>
    </div>
    <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
            <img src={app} alt='abc'/>
            <img src={play} alt='abc'/>
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt='abc'/>
    </div>
    <div className="copyright">
        <p>@ 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
    </div>
</footer>
    
  )
}
