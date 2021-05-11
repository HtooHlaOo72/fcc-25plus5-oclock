import React from 'react';
import { FaPlay,FaUndo } from 'react-icons/fa';
const PlayAndReset=(props)=>{
  return (
    <div className='mt-3'>
      <button 
      id='start_stop'
      className='btn btn-dark'
      onClick={props.start}
      >< FaPlay/></button>
      <button 
      id='reset'
      className='btn btn-light'
      onClick={props.reset}
      ><FaUndo /></button>
    </div>
  )
}

export default PlayAndReset;