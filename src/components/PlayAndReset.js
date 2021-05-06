import React from 'react';

const PlayAndReset=(props)=>{
  return (
    <div>
      <button 
      id='start-stop'
      className='btn btn-dark'>Play</button>
      <button 
      id='reset'
      className='btn btn-light'>Reset</button>
    </div>
  )
}

export default PlayAndReset;