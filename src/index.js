import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/layout/NavBar';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/firbaseConfig';
import { createFirebaseInstance } from 'redux-firestore';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfProps= {
        firebase,
        config:{},
        dispatch: store.dispatch,
        createFirebaseInstance

}

ReactDOM.render(
<React.StrictMode>
        <Provider store = {store}>
           <ReactReduxFirebaseProvider {...rrfProps}>
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
          </ReactReduxFirebaseProvider>
       </Provider>
</React.StrictMode> 
        ,
        
document.getElementById('root'));