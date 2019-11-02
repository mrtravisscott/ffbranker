import React, {Component} from 'react';
import Register from './Register/Register';
import Login from './Login/Login'
import './Login/Login.css';
import '../App.css';
class AuthGateway extends Component {
    constructor () {
        super();
    }
    render(){
        return(
            <div>
                <h1 class='my-font'>The Fantasy Football Ranker</h1>
                <h2 class='my-font'>Register as a New User</h2>
                <Register handleRegister={this.props.handleRegister}/>
                <h2 class='my-font login-text' >Login</h2>
                <Login handleLogin={this.props.handleLogin}/>
            </div>
        )
    }
}

export default AuthGateway