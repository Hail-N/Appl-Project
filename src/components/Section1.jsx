
import macbook from "../assets/images/home/mac-laptop.jpg";
import React from 'react'

function Section1() {
  return (
    <section className="main-highlight-wrapper">
      <div className="internal-wrapper">
        {/* <div className="model">16-inch model</div> */}

        <div className="product-title">MacBook Pro</div>

        <div className="brief-description">The best for the brightest.</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>

        <div className="main-image-wrapper">
          <img src={macbook} />
        </div>
      </div>
    </section>
  );
}

export default Section1