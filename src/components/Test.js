import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Test.css';

function Test() {
  return (
    <div className='ai-container'>
      <video src='/videos/Data_Grid.mp4' autoPlay loop muted />
      {/* <video src='/videos/Data_Grid.mp4' autoPlay loop muted /> */}
      <h1>The Future is Digital</h1>
      <p>What will your life be like in the future?</p>
      <div className='ai-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Find out
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Dive in <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Test;
