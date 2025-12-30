import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';
import MyEvents from './components/MyEvents';

function App() {
  //js
  let cnt = 5
  const arr = [1, 2, 3]
  const obj = [{name:"",sub:""},{name:"",sub:""},{name:"",sub:""}]
  return (
    <div className="App">
      {
        cnt === 5 ?<FirstComp/> : "string"
      }
      
      {
        cnt === 5 && <FirstComp/> 
      }
      <h1 style={{ color: 'forestgreen', backgroundColor: 'green' }}>App</h1>
      <p>
        cnt = {cnt}
      </p>
      {
        arr.map((item) =>{
          return(
          <p>
            {item * item}
          </p>
          )
        })
      }

--------------------------------

{
        arr.map((item) =>(
          <p>
            {item * item}
          </p>
        ))
      }
  --------------------------------
  <br/>
  <MyEvents/>
    </div>
  );

}

export default App;
