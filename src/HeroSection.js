import React from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import Cards from './Cards'
import Footer from './Footer'


function HeroSection() {
  return (
  	<>
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Journey Begins Here!!</h1>
      <p>Start Exploring Wolrd With Us!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  <Cards/>
  <Footer/>
  </>
  );
}

export default HeroSection;