import React from 'react';
import ControlSwitches from './ControlSwitches';
const BreakLength=(props)=>{
  return (
    <div className='col-6 p-3 border'>
      <h2 id='break-label'>Break Length</h2>
      <ControlSwitches 
        id='break'
        value={props.break}
        
        onIncre={props.onIncre}
        onDecre={props.onDecre}
      />
    </div>
  );
}

export default BreakLength;