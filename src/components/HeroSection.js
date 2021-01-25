import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted/>
      <h1>Ecrivez votre Histoire</h1>
      <p>Apprenez et jouez en même Temps</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Lancez-vous !
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
