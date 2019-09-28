import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class PlayersList extends Component {
    constructor() {
        super();
        this.state = {
            players: []
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
    componentDidMount(){
      this.getPlayers().then((data) => { 
            console.log('data', data );
            data.DraftRankings.sort(function(a,b){
                return a.ranking - b.ranking;
            })
            this.setState({players: data.DraftRankings.slice(0,200)})
            })
       
    }
    render() {
        let players =  this.state.players.map( (d,i) => {
            return <li
              key={i}
             
            >
             {d.displayName}
            </li>
          })
      return (
        <div>
            <Link to={'/my-rankings'}> Go To My Own Rankings </Link>
            <h1>NFL BASED RANKINGS</h1>
            {players}
        
      
            </div>
      );
    }
}

export default PlayersList;