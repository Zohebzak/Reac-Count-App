import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Count = (props) => {

  return (
    <>
      <button onClick={() => props.onclick(props.name)} style={{backgroundColor:'green'}}>{props.name}</button>


    </>
  )
}


function App(props) {
  const [counter, setCounter] = useState(0)

  const onclick = (value) => {
    if (value === "increament") {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }

  }

  return (
    <div >
      <div className='container'>
        <Count counter={counter} onclick={onclick} name={"increament"} />
        <Count counter={counter} onclick={onclick} name={"decreament"} />
        <div>counter:{counter}</div>
      </div>


    </div>
  );
}

export default App;
