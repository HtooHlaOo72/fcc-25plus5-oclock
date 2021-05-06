import React from 'react';
import ControlSwitches from './ControlSwitches';

const SessionLength=(props)=>{
  return (
    <div className='col-6 p-3'>
      <h2 id='session-label'>Session Length</h2>
      <ControlSwitches 
        id='session'
        defValue={25}
      />
    </div>
  );
}

export default SessionLength;