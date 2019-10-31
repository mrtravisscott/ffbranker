import React from 'react';
import './App.css';
import UserFfbRanking from './FfbRankingContainer/UserFfbRanking';
import FfbRanking from './FfbRankingContainer/FfbRanking';
import PlayersList from './FfbRankingContainer/PlayersList';
import Main from './FfbRankingContainer/Main';
import AuthGateway from './AuthGateway/AuthGateway';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
    }
    handleRegister = async (formData) => {
      console.log("REGISTERING")
      console.log(formData);
      const registerResponse = await fetch("http://localhost:9000/auth/register",{
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log('registerResponse', registerResponse);
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse);
      if(parsedResponse.status.code === 201){
        console.log("successful registration");
        this.setState({
          loggedIn: true,
          username: parsedResponse.data.username
        })
      }
    }
    handleLogin = async (formData) => {
      console.log("REGISTERING")
      console.log(formData);
      const registerLogin = await fetch("http://localhost:9000/auth/login",{
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log('registerLogin', registerLogin);
      const parsedResponse = await registerLogin.json();
      console.log(parsedResponse);
      if(parsedResponse.status.code === 200){
        console.log("successful login");
        this.setState({
          loggedIn: true,
          username: parsedResponse.data.username
        })
      }
    }
    // <AuthGateway handleRegister={this.handleRegister}/>
    render(){
      return (
        <div className="App">
                    {
            this.state.loggedIn ? 
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Fantasy Football Ranker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link> <Link to={`/my-rankings`}>My current rankings </Link></Nav.Link>
                <Nav.Link href="#link"><Link to={`/`}>NFL current rankings </Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>: <div></div> }
          {
            this.state.loggedIn ?
            <Main /> :
            <AuthGateway handleLogin={this.handleLogin} handleRegister={this.handleRegister}/>
          }
        </div>
      );
    }
  }


    // <AuthGateway handleRegister={this.handleRegister}/>


  export default App;