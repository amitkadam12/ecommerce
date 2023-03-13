import React from 'react'
import Iframe from 'react-iframe'
import "./contact.css"
import  { useState} from 'react';

import p1 from "../../image/people/1.png"
import p2 from "../../image/people/2.png"
import p3 from "../../image/people/3.png"

const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (name && email && message && subject) {
      // TODO - send mail

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        alert('Invalid email address');
      } else {
        alert('Thank You!');
      }
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    //   setEmailSent(true);
    } else {
      alert('Please fill in all fields.');
    }
}
  return (
    <>
         
         <section id="page-header" className="contact-header">
        <h2>#LetsTalk</h2>
        <p> Leave a message,We love to hear from you! </p>
      </section>

      <section id="contact-details" className="section-p1 ">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today.</h2>
          <h3>Head Office</h3>

          <li>
            <i className="fal fa-envelope"></i>
            <p>
              A Wing, 3rd Floor, Kolte Patil City Vista, Fountain Road, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014
            </p>
          </li>
          <li>
            <i className="fal fa-envelope"></i>
            <p>suavis@8934.gmail.com</p>
          </li>
          <li>
            <i className="fal fa-phone-alt"></i>
            <p>89237742039</p>
          </li>
          <li>
            <i className="fal fa-clock"></i>
            <p>Monday to Saturday:9.00am to 16.00 pm</p>
          </li>
        </div>

        <div className="map">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.188383499388!2d73.93632763087201!3d18.560639898169377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38e09afdbd3%3A0x118be76c7f623670!2sBootstart%20CoWork%20Kharadi!5e0!3m2!1sen!2sin!4v1665475363315!5m2!1sen!2sin"
            width="600px"
            height="450px"
            display="block"
            position="relative"
          />
        </div>
      </section>
      <section id="form-details">
        <form action="http://localhost/?cx-layout=suavis-contactus.json" method="get">
          <span>LEAVE A MESSAGE</span>
          <h2>
            We love to hear from you<i class="bi bi-emoji-smile"></i>
          </h2>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" />
          <input type="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message"></textarea>
          {/* <p className="normal1" onClick={submit}>
            <span>Send</span>
          </p> */}
          <button className='btn-submit' onClick={submit}>Submit</button>
        </form>
        <div className="people">
          <div>
            <img src={p1} alt="" />
            <p>
              <span>Paresh Singh</span> Senior Marketing manager
              <br />
              Phone: + 000 911 327 <br /> Email: paresh@gmail.com
            </p>
          </div>
          <div>
            <img src={p2} alt="" />
            <p>
              <span>Satish Singh</span> Senior Developer <br />
              Phone: + 000 941 328 <br /> Email: satish@gmail.com
            </p>
          </div>
          <div>
            <img src={p3} alt="" />
            <p>
              <span>Prajakta Singh</span> Senior Marketing manager <br />
              Phone: + 000 961 357 <br /> Email: prajakta@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section id="newslatter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail update about our latest shop and <span> special offers.</span>{' '}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder=" YOUR E-MAIL ADDRESS " />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default Contact