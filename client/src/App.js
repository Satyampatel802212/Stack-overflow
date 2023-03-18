import React,{useEffect} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
import { fetchAllQuestions } from './actions/question.js';
import { fetchAllUsers } from './actions/users.js';

function App() {
  const dispatch=useDispatch()
useEffect(()=>{
   dispatch(fetchAllQuestions())
   dispatch(fetchAllUsers())
},[dispatch])
  return (
    <div className="App">
      <Router>
        <AllRoutes />
        <Navbar/>
      </Router>
    </div>
  )
}

export default App;
