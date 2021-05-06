import React from 'react';

const ControlSwitches=({onDecre,onIncre,value,defValue,id})=>{
  return (
    <div className='row'>
      <button 
        className='col-4 btn'
        id={id+'-decrement'}
        onClick={onDecre}
      >Decre</button>

        <span className='col-4' id={id+'-length'}>
          {(value)?value:defValue}
        </span>
      <button 
        className='col-4 btn'
        id={id+'-increment'}
        onClick={onIncre}
      >Incre</button>
    </div>
  );
}

export default ControlSwitches;