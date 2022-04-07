import React, { useState } from "react";
import './index.css'

function App(){

  //state
const [weight ,setWeight] =useState(0)
const [height ,setHeight] =useState(0)
const [bmi ,setBmi] =useState(0)
const [message ,setMessage] =useState('There is no message')


let calcBmi = (event)=>{
  //prevent submitting
  event.preventDefault()

  if (weight === 0 || height === 0){
    alert('Please enter a valid weight and height')
  } else {
    let bmi =(weight / (height * height) * 703)
    setBmi(bmi.toFixed(1))

     // Logic for message

     if (bmi < 25){
      setMessage('You are underweight')
    } else if (bmi >= 25 && bmi < 30){
      setMessage('You are a healthy weight')
    }else {
      setMessage ('you are overweight')
    }
  }
}
  
let reload = () => {
  window.location.reload()
}

  return(
    <div className="app">
    <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <lable>Weight (lbs)</lable>
          <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
        </div>
        <div>
          <lable>Height (in)</lable>
          <input value={height} onChange={(event) => setHeight(event.target.value)}/>
        </div>
        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
        </div>
      </form> 
  
      <div className='center'>
        <h1>Your BMI is : {bmi}</h1>
        <p>{message}</p>
      </div>
  
  
    </div>
  </div>
  );
  }

  export default App;