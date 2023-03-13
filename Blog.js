import React from 'react'
import './blog.css';
import blogList from './blogdata'
const Blog = () => {
  return (
    <>
    <section id="page-header" class="blog-header">
        <h1>#readmore</h1>
        <p>Read all case studies about our products!</p>
    </section>
     {
      blogList.map(item => (
        <section id="blog">
      <div class="blog-box">
          <div class="blog-img">
              <img src={item.img} alt="girl"/>
          </div>
          <div class="blog-details">
              <h2>The Cotton-Jersey Zip-Up Hoodie</h2>
              <p>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr
                 wolf chartreuse hexagon irony, godard... 
              </p>
              <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
      </div>
      </section>
      ))
     }
    </>
  )
}

export default Blog;
