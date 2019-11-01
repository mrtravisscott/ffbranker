import React from 'react';
import { BrowserRouter,Switch, Route, Router } from 'react-router-dom'
import UserFfbRanking from './UserFfbRanking';
// import FfbRanking from './FfbRankingContainer/FfbRanking';
import PlayersList from './PlayersList';
import PlayerProjections from './PlayerProjections';
import MyTeam from './MyTeam';
// what is switch doing?
// return the first matching route

function Main() {
  return (
     <main>
  
      <Switch>
        <Route exact path='/' component={PlayersList} />
        <Route exact path='/:position/:displayname' component={PlayerProjections} />
        <Route path='/my-rankings' component={UserFfbRanking} />
        <Route path='/my-team' component={MyTeam} />
      </Switch> 
     
     </main>
  );
}

export default  Main
