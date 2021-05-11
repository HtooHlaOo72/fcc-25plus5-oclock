import React from 'react';
import ControlSwitches from './ControlSwitches';

const SessionLength=(props)=>{
  return (
    <div className='col-6 p-3 border'>
      <h2 id='session-label'>Session Length</h2>
      <ControlSwitches 
        id='session'
        value={props.session}
        
        onIncre={props.onIncre}
        onDecre={props.onDecre}
      />
    </div>
  );
}

export default SessionLength;