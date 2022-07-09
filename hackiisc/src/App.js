import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// stylesheet
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/registercompany'  element = {<Register type = "Company"/>}> </Route>
            <Route exact path='/registeremployee'  element = {<Register type = "Employee"/>}> </Route>
          </Routes>
         <Footer />
      </Router>
      
    );
  }

}

export default App;
