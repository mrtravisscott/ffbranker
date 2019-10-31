import React, {Component} from 'react';
import './Login.css';
class Login extends Component {
    constructor () {
        super();
        this.state = {
            username: null,
            password: null,
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMITTED THE FORM");
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label class='text-center'>Username:</label> <input class='input-box input-lg' ype="text" name="username" onChange={this.handleChange}/>
                <label> Password: </label><input class='input-box input-lg' type="password" name="password" onChange={this.handleChange}/>
                <input class='login-btn btn-success' type="submit" value="Login" />
            </form>
        )
    }
}
export default Login;