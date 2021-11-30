import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/layout/NavBar';

ReactDOM.render(
<React.StrictMode>
        <Router>
                <NavBar/>
                <h3 className = "text-primary">
                TodoApp
                </h3>    
                <Routes>
                        <Route path="/signin"  element={<div><SignIn /></div>}/>
                        <Route path="/signup"  element={<div><SignUp /></div>}/>
                        <Route path="/"        element={<div><Dashboard /></div>}/>
                                
                </Routes>
    </Router> 
</React.StrictMode> 
        ,
        
document.getElementById('root'));