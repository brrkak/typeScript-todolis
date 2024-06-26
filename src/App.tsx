import './App.css';
import React from 'react';
import Todolist from './Todolist';
import MapTest from './MapTest';
import Clock from './Clock'

function App() {


  return (
    <div className='container'> 
      <Todolist/>
      <MapTest/>
      <Clock/>
    </div>
  );

}


export default App;
