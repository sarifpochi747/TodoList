import React from 'react';
import { useState } from 'react';
import './App.css';

import DataContext from './DataContext';
import Form from './component/Form';
import Todolist from "./component/Todolist"




function App() {


  const [data,setData] = useState([])
  const [selectStatus,setSelectStatus] = useState("all")
  

  return (
    <DataContext.Provider value={{data,setData,selectStatus,setSelectStatus}} >
      <div className="App">
        <div className='header'>Ed's Todo List</div>
        <Form onAddNewData/> 
        <Todolist data={data}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
