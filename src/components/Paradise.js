import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Paradise.css';

function Paradise() {
  return (
    <div className='island-container'>
      <video src='/videos/paradise.mp4' autoPlay loop muted />
      {/* <video src='/videos/Data_Grid.mp4' autoPlay loop muted /> */}
      <h1>Paradise</h1>
      <p>Where would you like to go?</p>
      <div className='island-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Adventure
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Explore <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Paradise;
