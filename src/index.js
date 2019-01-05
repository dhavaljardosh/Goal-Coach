import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory'
import {firebaseApp} from './firebase'
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import reducer from './reducers'
import { logUser } from './actions';
const history = createHistory();

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=>{
    
    if(user){
        console.log('user has signed In or up' , user);
        const { email } = user;
        store.dispatch(logUser(email))
        history.push('/')
    }else{
        console.log('user has signed out or still needs to sign in', user);
        history.replace('/signin')
    }
})

ReactDOM.render(
    <Provider store={store}>
 <Router history={history}>
    <div>
    <Route exact path="/" component={App}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
    </div>  
    </Router>
    </Provider>
   , 
    document.getElementById('root')
);
