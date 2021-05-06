import React from 'react';
import ControlSwitches from './ControlSwitches';
const BreakLength=(props)=>{
  return (
    <div className='col-6 p-3'>
      <h2 id='break-label'>Break Length</h2>
      <ControlSwitches 
        id='break'
        defValue={5}
      />
    </div>
  );
}

export default BreakLength;