import React, {Component} from 'react';
import Register from './Register/Register';
import Login from './Login/Login'
import './Login/Login.css';
class AuthGateway extends Component {
    constructor () {
        super();
    }
    render(){
        return(
            <div>
                <h1>The Fantasy Football Ranker</h1>
                <h2>Register as a New User</h2>
                <Register handleRegister={this.props.handleRegister}/>
                <h2 class='login-text' >Login</h2>
                <Login handleLogin={this.props.handleLogin}/>
            </div>
        )
    }
}

export default AuthGateway