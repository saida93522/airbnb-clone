import React from "react";

const Hero = () => {
  return (
    <section className="parent">
      <img
        src="./images/photo-grid.png"
        alt=""
        className="gallery__item"
        width="150"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
