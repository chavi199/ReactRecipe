import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import FirstComp from './components/FirstComp';
import SecComp from './components/SecComp';
import MyBtn from './components/MyBtn';

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("haya")
  const [str, setStr] = useState("")

  const [arr, setArr] = useState([])
  const [obj, setObj] = useState({})
  const [un, setUn] = useState()
  const [nul, setNul] = useState(null)
  const [bool, setBool] = useState(true)
  const [mat, setMat] = useState([[], []])
  ///////////////////JS////////////
  // let count = 0

  // const Add = () => {
  //   count += 1
  //   console.log(count);

  // }

  const changeStr = () => {
    setStr("APP")
  }
  const Add = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className="App">
      {/* JS */}
      {/* count: {count}
<button onClick={Add}>
  click + 
</button> */}

      {/* count: {count}
<button onClick={Add}>
  click + 
</button> */}

      <FirstComp name={name} count={count} />
      {/* <h3>{str}</h3>
      <MyBtn changeStr={changeStr}/> */}

      {/* <h3>{str1}</h3> */}
      <MyBtn changeStr={changeStr} />
    </div>
  );
}

export default App;
