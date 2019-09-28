import React, {Component} from 'react';

class FfbRanking extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }
    getPlayers = async() => {

        try {
            const players = await fetch('https://www.fantasyfootballnerd.com/service/draft-rankings/json/');
            const playersJson = await players.json();
            return playersJson;
        } catch (err) {
            console.log(err, 'error in catch block')
            return err
    }
}
    componentDidMount(){
      this.getPlayers().then((data) => console.log(data,  ' from famous quotes'));
    }
    render() {
      return (
        <div>
          
        </div>
      );
    }
}

export default FfbRanking;