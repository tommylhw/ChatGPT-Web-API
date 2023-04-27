import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Main from './components/Main';

const App = () => {

  return (

      <div className='container'>

        <Router>
              <Link to='/'></Link>

              <Routes>
                <Route path='/' element={<Main />} /> 
              </Routes>
          </Router>

      </div>

  ); 
}



export default App;
