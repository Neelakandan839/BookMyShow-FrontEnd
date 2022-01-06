import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./imageslider.css";

const slideImages = [
  'https://img.ticketnew.com/tn/offer_banner/doctor/1920_400.jpg',
  'https://img.ticketnew.com/tn/offer_banner/aranmanai3/1920_400.jpg',
  'https://img.ticketnew.com/tn/offer_banner/venom2/1920_400.jpg',
  'https://img.ticketnew.com/tn/offer_banner/bossbaby/1920_400.jpg',
  'https://img.ticketnew.com/tn/offer_banner/quiet/1920_400.jpg'
];

const Slideshow = () => {
    return (
      <div className="image-slider">
        <Slide  easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
