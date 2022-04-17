import React, { useState , useRef , useEffect } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

 let interval=useRef();

 const startTimer=()=>{
   const CounddownDate=new Date('Febraury 01, 2023 00:00:00').getTime();
   interval=setInterval(()=>{
     const now = new Date().getTime();
     const distance=CounddownDate - now ;
     const days=Math.floor(distance/(1000*60*60*24));
     const Hours=Math.floor(distance%(1000*60*60*24)/(1000*60*60));
     const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
     const seconds=Math.floor((distance%(1000*60))/1000);

     if(distance<0){
       //stop watch
      
       clearInterval(interval.current);

     }

     else{
       //update timer

       setTimerDays(days);
       setTimerHours(Hours);
       setTimerMinutes(minutes);
       setTimerSeconds(seconds);

     }
   },1000)
 }

 //lifecycle

 useEffect(()=>{
   startTimer();
   return()=>{
    clearInterval(interval.current);
   }
 })

  return (
     <div>
      {/* <input id='input'  placeholder='Please enter Month date, year'></input><button id="click">Click Me</button> */}
      <section className="timer-container">
      <section>
      <p>{timerDays}</p>
      <p><small>Days</small></p>
      </section>
      <span>:</span>

      <section>
      <p>{timerHours}</p>
      <p><small>Hours</small></p>
      </section>
      <span>:</span>

      <section>
      <p>{timerMinutes}</p>
      <p><small>Minutes</small></p>
      </section>
      <span>:</span>

      <section>
      <p>{timerSeconds}</p>
      <p><small>Seconds</small></p>
      </section>
    
    </section>
    </div>
  )
}

export default App
