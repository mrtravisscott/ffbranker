import React, {Component} from 'react';
import '../Login/Login.css';
import '../../App.css';
class Register extends Component {
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
        this.props.handleRegister(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <label class='my-font'>Username:</label>   <input class='input-box' type="text" name="username" onChange={this.handleChange}/>
                <label class='my-font'>Password: </label><input class='input-box' type="password" name="password" onChange={this.handleChange}/>
                <input class='login-btn btn-success' type="submit" value="Register" />
            </form>
        )
    }
}
export default Register;