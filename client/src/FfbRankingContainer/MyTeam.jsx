import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './football.css';
class MyTeam extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            hasCreated: false
        }
    }
    getPlayers = async() => {
        try{
            const MyPlayers = await fetch ("/my-team", {
                credentials: "include"
            })
            const parsedResponse = await MyPlayers.json();
            console.log('get players db', parsedResponse);
            this.setState({hasCreated: true});
            return parsedResponse.data;   
      } catch (err) {
            console.log(err, 'error in catch block')
            return err
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
        const NewPlayer = await fetch ("/my-team", {
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

 deletePlayer = async(id, i) => {
    // console.log(formData);
     try{
         const NewPlayer = await fetch (`/my-team/${id}`, {
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
            this.setState({players: data})
            })
       
    }
    render() {
        let players =  this.state.players.map( (d,i) => {
            return <tr
              key={i}
             
            >

            <td>{d.ranking}</td>
             <td><Link to={`/${d.Position}/${d.Name}`}> {d.Name}</Link> </td>
             <td>{d.Position}</td> 
             <td>{d.Team}</td>

             <td><button onClick={() => this.deletePlayer(d._id, i)}>Remove Player</button></td>
            </tr>
          })
      return (
        <div>
            <h1>MY TEAM</h1>
            <tr><th>Ranking</th><th>Name</th><th>Team</th><th>Position</th></tr>
            {players}
        </div>
      );
    }
}

export default MyTeam;