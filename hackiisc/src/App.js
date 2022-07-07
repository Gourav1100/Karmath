import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// stylesheet
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
          </Routes>
      </Router>
    );
  }

}

export default App;
