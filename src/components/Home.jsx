import React from 'react'
import "./Home.css"


const Home = () => {
  return (
    <>
<div className='img'>
<div class="header-bar-cart">
  <a href="#" class="cart-link">
    <span aria-hidden="true" class="icon_bag_alt"></span>
  </a>
</div>

<div class="hero-content-overlay">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="hero-content-wrap">
          <header class="entry-header">
            <h4 className='heading4'>Get started with online courses</h4>
            <h1>
              Best Online<br />Learning System
            </h1>
          </header>
          <div class="entry-content">
            <p className='para'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
<button className='btn'>Read More</button>
</div>
</div>



    </>
  )
}

export default Home