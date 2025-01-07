import logo from './logo.svg';
import './App.css';

import NReg from './Component2/NReg';
import Regv from './Component2/Regv';




function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

       <Regv/>
     {/* <NReg/> */}
     
      </header>
    </div>
  );
}

export default App;
