import React from 'react';
import {FaArrowDown,FaArrowUp} from 'react-icons/fa';
const ControlSwitches=({onDecre,onIncre,value,defValue,id})=>{
  return (
    <div className='row'>
      <button 
        className='col-4 btn btn-dark'
        id={id+'-decrement'}
        onClick={()=>{onDecre(id)}}
      >< FaArrowDown /></button>

        <span className='col-4 fs-3' id={id+'-length'}>
          {value}
        </span>
      <button 
        className='col-4 btn btn-dark'
        id={id+'-increment'}
        onClick={()=>{onIncre(id)}}
      >< FaArrowUp /></button>
    </div>
  );
}

export default ControlSwitches;