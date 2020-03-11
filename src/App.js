import React from 'react';
import ButtonNew from './components/ButtonNew';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/test.css"
import Routes from './routes/routes';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
