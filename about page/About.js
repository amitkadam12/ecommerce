import React from "react";
import Marquee from "react-fast-marquee";
import I1 from "../../image/about/a6.jpg";
import v1 from "../../image/about/1.mp4";
import f1 from "../../image/features/f1.png";
import f2 from "../../image/features/f2.png"
import f3 from "../../image/features/f3.png"
import f4 from "../../image/features/f4.png"
import f5 from "../../image/features/f5.png"
import f6 from "../../image/features/f6.png"

import "./about.css";

const About = () => {
  return (
    <>
      {/* <section id="page-header" style={{backgroundImage:"./images/about/banner.png"}}> */}
      <section id="page-header" className="about-header">
        <h2>#Know US</h2>
        <p> Lorem ipsum, dolor sit amet </p>
      </section>
      <section></section>
      <section id="about-head" class="section-p1">
        <img src={I1} alt="" />
        <div>
            <h2>Who We Are?</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolorem,
                 alias nisi sed dignissimos quas aliquid doloribus repellendus, dolor incidunt est, 
                 cumque porro sapiente amet earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut c
                 onsequatur repellendus tenetur veniam provident numquam illo nostrum adipisci amet inventore.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas nostrum nobis repellendus 
                 nihil eos, sed et harum placeat, quisquam at voluptatem modi reiciendis rem nesciunt iste nemo 
                 sunt fuga velit assumenda quasi officia voluptatum laudantium? Temporibus neque ex, illo repudiandae
                  consectetur porro ad ducimus. Quas numquam animi commodi quidem?
            </p>
            
            <Marquee bgcolor="pink" gradientWidth="none" className="marquee">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                aperiam quidem dolor distinctio blanditiis molestias quasi iusto
                recusandae, quae nam.
              </Marquee>
        </div>
        </section>

      <section id="about-app" class="section-p1">
        <h1>
          Download our <a href="#">App</a>
        </h1>
        <div class="video">
          <video autoPlay muted loop src={v1}></video>
        </div>
      </section>

      <section id="features" class="section-p1">
        <div class="fe-box">
          <img src={f1} alt="" />
          <h6> Free Shipping</h6>
        </div>
        <div class="fe-box">
          <img src={f2} alt="" />
          <h6> Online order</h6>
        </div>
        <div class="fe-box">
          <img src={f3} alt="" />
          <h6> Save money</h6>
        </div>
        <div class="fe-box">
          <img src={f4} alt="" />
          <h6>Promotions</h6>
        </div>
        <div class="fe-box">
          <img src={f5} alt="" />
          <h6>Happy Sale</h6>
        </div>
        <div class="fe-box">
          <img src={f6} alt="" />
          <h6>Support</h6>
        </div>
      </section>

      <section
        id="newslatter"
        class="section-p1 section-m1"
        style={{ backgroundImage: "../../images/banner//b14.png" }}
      >
        <div class="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            {" "}
            Get E-mail update about our latest shop and{" "}
            <span> special offers.</span>{" "}
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="  YOUR E-MAIL ADDRESS " />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default About;
