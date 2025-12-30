import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import FirstComp from './components/FirstComp';
import SecComp from './components/SecComp';

function App() {

const [count, setCount] = useState(0)
const [name, setName] = useState("haya")
const [arr, setArr] = useState([])
const [obj, setObj] = useState({})
const [un, setUn] = useState()
const [nul, setNul] = useState(null)
const [bool, setBool] = useState(true)
const [mat, setMat] = useState([[],[]])

///////////////////JS////////////
  // let count = 0

  // const Add = () => {
  //   count += 1
  //   console.log(count);
    
  // }

  
  const Add = () => {
    setCount(count+1);
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

<FirstComp name={name} count={count}/>
    </div>
  );
}

export default App;
