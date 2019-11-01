import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './football.css';
import { Image } from 'react-bootstrap';
 import NO from '../assets/NO.png'
// import assets from '../assets';
class PlayersList extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            filter: 'ALL'
        }
    }
    getPlayers = async() => {

          try {
    
            const apiKey = "76m3dsya26q8";
        const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/FantasyPlayersIDP`,
        {headers: { "Ocp-Apim-Subscription-Key": 	
        '800462222e7440bab7041c02e59edcce'
        }})

          //  const players = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/draft-rankings/json/${apiKey}`)
           
         console.log('WHAT ARE THE PLAYERS: ', players);

         const playersJson = await players.json();
         return playersJson;
   
      } catch (err) {
            console.log(err, 'error in catch block')
            return err
      }
    }
    // getWeeklyProjections= async() => {
    //   try {
    //     const apiKey = "76m3dsya26q8";
    //     const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/FantasyPlayers`)
    //     // const players = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/weekly-projections/json/${apiKey}/QB`)
    //     console.log('WHAT ARE THE PLAYERS: ', players);
    //     const playersJson = await players.json();
    //     console.log('WHAAYERS: ', playersJson);
    //     return playersJson;
  
    //   } catch (err) {
    //     console.log(err, 'error in catch block')
    //     return err
    //   }
    // }
    componentDidMount(){
      console.log('mounting component for player list');
      this.getPlayers().then((data) => { 
            console.log('data', data );
            // data.sort(function(a,b){
            //     return a.ranking - b.ranking;
            // })
            this.setState({players: data.slice(0,200)})
            })
       
    }
    setFilter(filter){
      console.log('i happen', filter)
      this.setState({filter: filter})
    }
    render() {
      console.log('iam?', this.state.players, this.state.filter)
      // let header = Object.keys(this.state.players[0])
      // let headers = header.map((key, index) => {
      //    return <th key={index}>{key.toUpperCase()}</th>
      // })
        let filterPlayers = this.state.players.filter((player) => {
          console.log('i run')
          if(this.state.filter === 'ALL'){
            return true;
          } else {
            if(this.state.filter === player.Position){
              return true;
            }
            else {
              return false;
            }
          }
        })
        let players =  filterPlayers.map( (d,i) => {
          const imageSty = {height: '100px', width: '100px'};
          let logo;
          if(d.Team){
            logo = require(`../assets/${d.Team}.png`)  
          } else {
            logo = require(`../assets/no-photo.png`)
          }
          return <tr
              key={i}
            >
              <td> {i + 1} </td>
              <td><Link to={`/${d.Position}/${d.Name}`}> {d.Name}</Link></td>
              <td>{d.Team}</td>
              <td> {d.Position}</td>
              <td> 
              <img alt="" style={imageSty} src={logo}></img> </td>
            </tr>
          })
      return (
        <div>
          <div>
      
           </div>
            <h1>CURRENT NFL BASED RANKINGS</h1>
            <h3>Filter By:</h3>
            <button onClick={() => this.setFilter('ALL')}>ALL</button>
            <button onClick={() => this.setFilter('QB')}>QB</button>
            <button onClick={() => this.setFilter('RB')}>RB</button>
            <button onClick={() => this.setFilter('WR')}>WR</button>
            <button onClick={() => this.setFilter('TE')}>TE</button>
            <button onClick={() => this.setFilter('DEF')}>DEF</button>
            <button onClick={() => this.setFilter('K')}>K</button>
            <tr><th>Ranking</th><th>Name</th><th>Team</th><th>Position</th><th>Team Logo</th>
            </tr>
            {players}
        
      
            </div>
      );
    }
}

export default PlayersList;