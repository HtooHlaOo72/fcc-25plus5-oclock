import React from 'react';

import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import Session from './Session';
import PlayAndReset from './PlayAndReset';

const Clock=()=>{
  return (
    <div className='row mt-5'>
      <h1>25+5 Clock</h1>
      < BreakLength />
      < SessionLength />
      < Session />
      < PlayAndReset />
    </div>
  )
}
export default Clock;