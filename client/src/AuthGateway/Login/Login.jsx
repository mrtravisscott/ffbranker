import React, {Component} from 'react';
import './Login.css';
import '../../App.css';
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
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label class='text-center my-font'>Username:</label> <input class='input-box input-lg' ype="text" name="username" onChange={this.handleChange}/>
                <label class='my-font'> Password: </label><input class='input-box input-lg' type="password" name="password" onChange={this.handleChange}/>
                <input class='login-btn btn-success' type="submit" value="Login" />
            </form>
        )
    }
}
export default Login;