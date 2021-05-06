import React from 'react';

import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import Session from './Session';
const Clock=()=>{
  return (
    <div>
      < BreakLength />
      < SessionLength />
      < Session />
    </div>
  )
}
export default Clock;