import React from "react";
import landingImg from "../../img/landingImg.jpeg";
import LandingNav from './LandingNav'

const Landing = () => {
  return (
    <div className="">
      <LandingNav/>
      <div className="h-100">
        <img src={landingImg} alt="Note pad and pen" className="h-100 w-100" />
      </div>
      <div className="about d-flex flex-column align-items-center pt-5 container">
          <h2>About</h2>
          <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt. Dolore accusantium commodi assumenda? Totam rerum, dolorem, voluptatibus sit vitae quibusdam eos praesentium accusamus itaque quam odio sunt molestiae voluptatum!</p>
      </div>
    </div>
  );
};

export default Landing;
