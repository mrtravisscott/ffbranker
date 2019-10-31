import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './projections.css';
class PlayersProjections extends Component {
    constructor() {
        super();
        this.state = {
            player: {}
        }
    }
    getPlayers = async() => {

          try {
    
            const apiKey = "76m3dsya26q8";
           const players = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/draft-rankings/json/${apiKey}`)
           
         console.log('WHAT ARE THE PLAYERS: ', players);

         const playersJson = await players.json();
         return playersJson;
   
      } catch (err) {
            console.log(err, 'error in catch block')
            return err
      }
    }
    getWeeklyProjections= async() => {
      try {
        const position = this.props.match.params.position;  
        const apiKey = "76m3dsya26q8";
        const season = '2018REG';
       // https://api.fantasydata.net/api/nfl/fantasy/json/PlayerSeasonProjectionStats/{season}
        const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/PlayerSeasonProjectionStats/${season}`,     {headers: { "Ocp-Apim-Subscription-Key": 	
        '800462222e7440bab7041c02e59edcce'
        }})
        
        // const players = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/weekly-projections/json/${apiKey}/${position}/8`)
        console.log('WHAT ARE THE PLAYERS: ', players);
        const playersJson = await players.json();
        console.log('WHAAYERS: ', playersJson);
        return playersJson;
  
      } catch (err) {
        console.log(err, 'error in catch block')
        return err
      }
    }
    getWeeklyProjectionsByWeek= async(weekNumber) => {
      try {
        const position = this.props.match.params.position;  
        const apiKey = "76m3dsya26q8";
        const season = '2018REG';
       // https://api.fantasydata.net/api/nfl/fantasy/json/PlayerSeasonProjectionStats/{season}
        const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/PlayerGameProjectionStatsByWeek/${season}/${weekNumber}`,     {headers: { "Ocp-Apim-Subscription-Key": 	
        '800462222e7440bab7041c02e59edcce'
        }})
        
        // const players = await fetch(`https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/weekly-projections/json/${apiKey}/${position}/8`)
        console.log('WHAT ARE THE PLAYERS: ', players);
        const playersJson = await players.json();
        console.log('WHAAYERS: ', playersJson);
        const displayName = this.props.match.params.displayname;
        console.log('dn', displayName)
        for (let i = 0; i < playersJson.length; i++){
            if(displayName === playersJson[i].Name){
                console.log('This him!', playersJson[i]);
                this.setState({player: playersJson[i]})
                console.log('THE PROJECTION PLAYER: ', this.state.player)
            }
        }
        return playersJson;
  
      } catch (err) {
        console.log(err, 'error in catch block')
        return err
      }
    }
    
    componentDidMount(){
      this.getWeeklyProjections().then((data) => { 
            console.log('data', data );
            console.log('data', data );
            console.log(this.props.match.params)
            const displayName = this.props.match.params.displayname;
            console.log('dn', displayName)
            for (let i = 0; i < data.length; i++){
                if(displayName === data[i].Name){
                    console.log('This him!', data[i]);
                    this.setState({player: data[i]})
                    console.log('THE PROJECTION PLAYER: ', this.state.player)
                }
            }
    //         // data.DraftRankings.sort(function(a,b){
    //         //     return a.ranking - b.ranking;
    //         // })
    //         // this.setState({players: data.DraftRankings.slice(0,200)})
             })
       
    }
    render() {
      
        
      return (
        <div> 
          <button onClick={() => this.getWeeklyProjections()}>Season</button><button onClick={() => this.getWeeklyProjectionsByWeek(1)}>Week 1</button><button onClick={() => this.getWeeklyProjectionsByWeek(2)}>Week 2</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(3)}>Week 3</button><button onClick={() => this.getWeeklyProjectionsByWeek(4)}>Week 4</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(5)}>Week 5</button><button onClick={() => this.getWeeklyProjectionsByWeek(6)}>Week 6</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(7)}>Week 7</button><button onClick={() => this.getWeeklyProjectionsByWeek(8)}>Week 8</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(9)}>Week 9</button><button onClick={() => this.getWeeklyProjectionsByWeek(10)}>Week 10</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(11)}>Week 11</button><button onClick={() => this.getWeeklyProjectionsByWeek(12)}>Week 12</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(13)}>Week 13</button><button onClick={() => this.getWeeklyProjectionsByWeek(14)}>Week 14</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(15)}>Week 15</button><button onClick={() => this.getWeeklyProjectionsByWeek(16)}>Week 16</button>
          <button onClick={() => this.getWeeklyProjectionsByWeek(17)}>Week 17</button>
         {/* {  this.state.player.length ? (  */}
          <div>
            <h1>Projections for Season {this.state.player.Season} </h1>
            { this.state.player.Week ? <h1>Week {this.state.player.Week} </h1> : <h1></h1>}
            <h2>{this.state.player.Name}</h2>
          
            <tr><td class="center-right">Team: </td><td>{this.state.player.Team}</td></tr>
            <tr><td class="center-right">Position: </td><td> {this.state.player.Position}</td></tr>
            <tr><td class="center-right">Fumbles Lost: </td><td>{this.state.player.FumblesLost}</td></tr>
            
            <tr><td class="center-right">Receiving Yards: </td><td> {this.state.player.ReceivingYards} </td></tr>
            <tr><td class="center-right">Receiving Touchdowns: </td><td>{this.state.player.ReceivingTouchdowns}</td></tr>
            <tr><td class="center-right">Receptions: </td><td> {this.state.player.Receptions}</td></tr>
            <tr><td class="center-right">Rush Attempts: </td><td>{this.state.player.RushingAttempts}</td></tr>
            <tr><td class="center-right">Rushing Touchdowns: </td><td> {this.state.player.RushingTouchdowns}</td></tr>
            <tr><td class="center-right">Rushing Yards: </td><td>{this.state.player.RushingYards}</td></tr>
            <tr><td class="center-right">Defensive Forced Fumble: </td><td>{this.state.player.FumblesForced}</td></tr>
            <tr><td class="center-right">Defensive Forced Recovery: </td><td>{this.state.player.FumblesRecovered}</td></tr>
            <tr><td class="center-right">Defensive Interception: </td><td> {this.state.player.Interceptions}</td></tr>
 
            <tr><td class="center-right">Defensive Interceptions Returned Touchdown: </td><td> {this.state.player.InterceptionReturnTouchdowns}</td></tr>
            <tr><td class="center-right">Defensive Fumble Returned Touchdown: </td><td> {this.state.player.FumbleReturnTouchdowns}</td></tr>
            <tr><td class="center-right">Defensive Sack: </td><td> {this.state.player.Sacks}</td></tr>
            <tr><td class="center-right">Kick Return Touchdown: </td><td> {this.state.player.KickReturnTouchdowns}</td></tr>
  
            <tr><td class="center-right">Field Goals Made: </td><td> {this.state.player.FieldGoalsMade}</td></tr>
            <tr><td class="center-right">Field Goals Attempted: </td><td> {this.state.player.FieldGoalsAttempted}</td></tr>
            <tr><td class="center-right">Passing Attempts: </td><td> {this.state.player.PassingAttempts}</td></tr>
            <tr><td class="center-right">Passing Completed: </td><td> {this.state.player.PassingCompletions}</td></tr>
            <tr><td class="center-right">Passing Interception: </td><td> {this.state.player.PassingInterceptions}</td></tr>
            <tr><td class="center-right">Passing Touchdown: </td><td> {this.state.player.PassingTouchdowns}</td></tr>
            <tr><td class="center-right">Passing Yards: </td><td> {this.state.player.PassingYards}</td></tr>
        
     </div>
         {/* ) : (<div> There are currently no projections for this play in the upcomingweek Please try again later. Projections release on tuesday. </div> )} */}
        
            </div>
      );
    }
}

export default PlayersProjections;