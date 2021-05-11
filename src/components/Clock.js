import { React,Component } from "react";

import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";
import Session from "./Session";
import PlayAndReset from "./PlayAndReset";




let origin = {
  break: 5,
  session: 25,
  isBreak:false,
  timer:1500,
  isNew: true,
  isPaused:true,
};
let play;//interval variable

class Clock extends Component{
 
  
  
  incre = (stateVar) => {

    if (
      (this.state[stateVar] < 60)
      &&(this.state.isPaused)
    ) {
      this.setState({ ...this.state,
                      isNew:true,
                      [stateVar]: this.state[stateVar] + 1,
      })
    }
  };
  decre = (stateVar) => {
    if (
      (this.state[stateVar] > 1)
      &&(this.state.isPaused)
    ){
      this.setState({ ...this.state,
                      isNew:true,
                      [stateVar]: this.state[stateVar] - 1,
                    });
      
    }
    
  };
  reset = () => {
    clearInterval(play);
    this.audioBeep.pause();
    this.audioBeep.currentTime=0;
    this.setState(origin);
  };
  decreTimer=()=>{
    if(this.state.timer>0&&!this.state.isPaused){
      this.setState({...this.start,timer:this.state.timer-1});
    }else if(this.state.timer<=0){
      this.beep();
      this.setState({...this.state,isBreak:!this.state.isBreak})
      if(this.state.isBreak){
        this.setState({...this.state,timer:this.state.break*60})
      }else{
        this.setState({...this.state,timer:this.state.session*60})
      }
      
    }
  }


  start = () => {
    const {isPaused,isNew} = this.state;
    
    if(isPaused){
      if(isNew){
        clearInterval(play);
        this.setState({
          timer:this.state.session*60,
          isPaused:!this.state.isPaused,
          isNew:false
        });
        play=setInterval(this.decreTimer,1000);
      }else{
        console.log('nonnew...')
        this.setState({
          ...this.state, isPaused:false
        });
      }
      
      
    }else{
      console.log(isPaused,'....')
      this.setState({...this.state,isPaused:true})
    }
    

    // if(!this.state.isCounting){
    //   clearInterval(play);
    // }
  };
  beep=()=>{
    this.audioBeep.play();
    setTimeout(() => {
      this.audioBeep.pause();
      this.audioBeep.currentTime=0;
    }, 2000);
    
  }
  state=origin;
  render(){
    return (
      <div className="row mt-5">
        <h1 className='text-decoration-underline text-bold'>25+5 Clock</h1>
        <BreakLength break={this.state.break} onIncre={this.incre} onDecre={this.decre} />
        <SessionLength session={this.state.session} onIncre={this.incre} onDecre={this.decre} />
        <Session 
          timer={this.state.timer} 
          isBreak={this.state.isBreak} 
          isPaused={this.state.isPaused} 
          session={this.state.session}
          isNew={this.state.isNew}
          />
        <PlayAndReset reset={this.reset} start={this.start} />
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
  
  
};
export default Clock;
