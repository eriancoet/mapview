import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Survey from './Survey';
import Dashboard from './Dashboard';
import DataCaptureList from './DataCaptureList';
import Layout from './Layout';
import MapList from './MapList';
import TaskList from './TaskList';
import './Layout.css';

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
   
    
        <Routes className="route">
          <Route path='/' element={<Home />} />
          <Route path='/Survey' element={<Survey />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/DataCaptureList' element={<DataCaptureList />} />
          <Route path='/Layout' element={<Layout />} />
          <Route path='/MapList' element={<MapList />} />
          <Route path='/TaskList' element={<TaskList />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

