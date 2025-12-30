import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';

function App() {
  //js
  let cnt = 5

  const arr = [1, 2, 3]
  const obj = [{name:"",sub:""},{name:"",sub:""},{name:"",sub:""}]
  return (
    <div className="App">
      <FirstComp/>
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
    

    </div>
  );
}

export default App;
