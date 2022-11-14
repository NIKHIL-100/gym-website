import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';

const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true:false;

  return(
  <div className="hero" id="home">

  <div className="blur hero-blur "></div>
    <div className="left-h">
      <Header />

      {/*the best ad*/}
      <div className="the-best-ad">
        <motion.div
        initial={{left: mobile? "165px" : '238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition, type:'tween'}}
          ></motion.div>
        <span>The best fitness club in the town</span>
      </div>

      {/*Hero heading*/}
      <div className="hero-text">
        <div>
          <span className="stroke-text">Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div>
          <span>
            IN HERE WE ILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE
            UP YOUR LIFE TO FULLEST
          </span>
        </div>
      </div>

      {/*figures */}
      <div className="figures">
        <div>
          <span> 
          <NumberCounter start={100} end={140}  delay='4' preFix="+"  />
          </span>
          <span>expert coachS</span>
        </div>
        <div>
          <span>
          <NumberCounter start={800} end={978}  delay='4' preFix="+"  />
          </span>
          <span>members joined</span>
        </div>
        <div>
          <span>
          <NumberCounter start={0} end={50}  delay='4' preFix="+"  />
          </span>
          <span>fitness programs</span>
        </div>
      </div>

      {/*hero buttons */}
      <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
      </div>
    </div>

    <div className="right-h">
      <div className="btn">Join Now</div>

      <motion.div
      initial={{right: '-1rem'}}
      whileInView={{right:'4rem '}}
      transition={transition}
      
      className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </motion.div>

      {/*hero image */}
      <img className="hero-image" src={hero_image} alt="" />
      <motion.img
      initial={{right:'11rem'}}
      whileInView={{right:'20rem'}}
      transition={transition}

      className="hero-image-back" src={hero_image_back} alt="" />

      {/*calories */}
      <motion.div
      initial={{right:'37rem'}}
      whileInView={{right:'28rem'}}
      transition={transition}

      className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </motion.div>
      
    </div>
  </div>
  )
  };

export default Hero;
