import React from 'react';

const Session=(props)=>{
  let minutes=Math.floor(props.timer/60).toString().padStart(2,0);
  let seconds=(props.timer%60).toString().padStart(2,0);
  if(props.isPaused&&props.isNew){
    minutes=props.session;
    seconds='00';
    
  }
  return (
    <div className='bg-warning border border-dark border-5'>
      <h3 id='timer-label' className={(props.isBreak)?'text-danger':'text-dark'}>{(props.isBreak)?"Break":'Session'}</h3>
      <span id='time-left' className='fs-1'>{minutes+':'+seconds}</span>
    </div>
  );
}

export default Session;