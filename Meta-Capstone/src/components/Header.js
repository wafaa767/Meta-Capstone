import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood .jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Syria</h3>
          <p>
          Our restaurant offers traditional and modern meals to suit our customers.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Confirm your reservation</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;