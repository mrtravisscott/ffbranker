import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './football.css';
class UserFfbRanking extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            hasCreated: false
        }
    }
    getPlayers = async() => {
        try{
            const MyPlayers = await fetch ("http://localhost:9000/draft-rankings", {
                credentials: "include"
            })
            const parsedResponse = await MyPlayers.json();
            console.log('get players db', parsedResponse);
            if(parsedResponse.status.code ===200){
                if(parsedResponse.data.length){
                    this.setState({hasCreated: true});
                return parsedResponse.data;
                } else {
                    const apiKey = "76m3dsya26q8";
                    const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/FantasyPlayersIDP`,
                    {headers: { "Ocp-Apim-Subscription-Key": 	
                    '800462222e7440bab7041c02e59edcce'
                    }})

                    console.log('WHAT ARE THE PLAYERS: ', players);
                    this.setState({hasCreated: false});
                    const playersJson = await players.json();
                    return playersJson;
                }
            } else {
                const apiKey = "76m3dsya26q8";
                const players = await fetch(`https://api.fantasydata.net/api/nfl/fantasy/json/FantasyPlayersIDP`,
                {headers: { "Ocp-Apim-Subscription-Key": 	
                '800462222e7440bab7041c02e59edcce'
                }})

                console.log('WHAT ARE THE PLAYERS2: ', players);
                this.setState({hasCreated: false});
                const playersJson = await players.json();
                return playersJson;
            }
    
        
   
      } catch (err) {
            console.log(err, 'error in catch block')
            return err
      }
}
flipPlayerUp(i){
    if(i !== 0){
        const players = this.state.players;
        const savePlayer = this.state.players[i];
        players[i] = this.state.players[i-1]
        players[i-1] = savePlayer;
        this.setState({players: players});
    }

}
flipPlayerDown(i){
    if(i !== this.state.players.length-1){
        const players = this.state.players;
        const savePlayer = this.state.players[i];
        players[i] = this.state.players[i+1]
        players[i+1] = savePlayer;
        this.setState({players: players});
    }
}
createMyRankings = async() => {
   // console.log(formData);
   const dbPlayers = [];
   for (let i = 0; i < this.state.players.length; i++){
       let formData = {Name: this.state.players[i].Name,
        Position: this.state.players[i].Position, 
        Team: this.state.players[i].Team,
        ranking: i + 1 };
    try{
        const NewPlayer = await fetch ("http://localhost:9000/draft-rankings", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await NewPlayer.json();
        if(parsedResponse.status.code ===201){
            this.setState({hasCreated: true});
            dbPlayers.push(parsedResponse.data);
          //  this.setState({players: [...this.state.players, parsedResponse.data]})
 
        }
    }catch(err){
        console.log('err', err)
    }
   

    }

    this.setState({players: dbPlayers});

}
updateMyRankings = async() => {
    // console.log(formData);
    for (let i = 0; i < this.state.players.length; i++){
        let formData = {Name: this.state.players[i].Name,
         Position: this.state.players[i].Position, 
         Team: this.state.players[i].Team,
         ranking: i + 1 };
         console.log('formData', formData);
     try{
         const NewPlayer = await fetch (`http://localhost:9000/draft-rankings/${this.state.players[i]._id}`, {
             method: "PUT",
             credentials: "include",
             body: JSON.stringify(formData),
             headers: {
                 "Content-Type": "application/json"
             }
         })
         const parsedResponse = await NewPlayer.json();
         if(parsedResponse.status.code ===201){
           //  this.setState({players: [...this.state.players, parsedResponse.data]})
  
         }
     }catch(err){
         console.log('err', err)
     }
    
 
     }
 
 }
 deleteMyRankings = async() => {
    // console.log(formData);
     try{
         const NewPlayer = await fetch (`http://localhost:9000/draft-rankings/`, {
             method: "DELETE",
             credentials: "include",
             headers: {
                 "Content-Type": "application/json"
             }
         })
         const parsedResponse = await NewPlayer.json();
         console.log('pr', parsedResponse)
         if(parsedResponse.status.code ===200){
             console.log('uhh i did it');
             this.componentDidMount();
         }
     }catch(err){
         console.log('err', err)
     }
 
 }
 deletePlayer = async(id, i) => {
    // console.log(formData);
     try{
         const NewPlayer = await fetch (`http://localhost:9000/draft-rankings/${id}`, {
             method: "DELETE",
             credentials: "include",
             headers: {
                 "Content-Type": "application/json"
             }
         })
         const parsedResponse = await NewPlayer.json();
         console.log('pr', parsedResponse)
         if(parsedResponse.status.code ===200){
             console.log('uhh i did it', parsedResponse.data);
             this.componentDidMount();
         }
     }catch(err){
         console.log('err', err)
     }
 
 }
    componentDidMount(){
      this.getPlayers().then((data) => { 
            console.log('data', data );
            // data.sort(function(a,b){
            //     if(a.ranking){
            //     return a.ranking - b.ranking;
            //     } else {
            //         return 0;
            //     }
                
            // })
            this.setState({players: data.slice(0,200)})
            })
       
    }
    render() {
        let players =  this.state.players.map( (d,i) => {
            return <tr
              key={i}
             
            >

             <td>{i+1}</td>  
             <td><Link to={`/${d.Position}/${d.Name}`}> {d.Name}</Link> </td>
             <td>{d.Position}</td> 
             <td>{d.Team}</td>
             <td><button onClick={() => this.flipPlayerUp(i)}>Move Up</button></td>
             <td><button onClick={() => this.flipPlayerDown(i)}>Move Down</button></td>
             <td><button onClick={() => this.deletePlayer(d._id, i)}>Remove Player</button></td>
            </tr>
          })
      return (
        <div>
            <h1>MY NFL BASED RANKINGS</h1>
            <tr><th>Ranking</th><th>Name</th><th>Team</th><th>Position</th></tr>
            {players}
            {  
                !this.state.hasCreated ? 
                <button onClick={() => this.createMyRankings()}> Create List</button> :
                <div> <button onClick={() => this.updateMyRankings()}> Update List</button> <button onClick={() => this.deleteMyRankings()}> Delete List</button> </div>
            }
        </div>
      );
    }
}

export default UserFfbRanking;