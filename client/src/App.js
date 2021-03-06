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
      const registerResponse = await fetch("/auth/register",{
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
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
      const registerLogin = await fetch("/auth/login",{
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await registerLogin.json();
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
            <Navbar class='my-font' bg="light" expand="lg">
            <Navbar.Brand href="#home" class='my-font' >Fantasy Football Ranker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link> < Link to={`/my-rankings`} class='grey-text'>My current rankings </Link></Nav.Link>
                <Nav.Link href="#link"><Link to={`/`} class='grey-text'>NFL current rankings </Link></Nav.Link>
                <Nav.Link href="#link"><Link to={`/my-team`} class='grey-text'>My NFL team </Link></Nav.Link>
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