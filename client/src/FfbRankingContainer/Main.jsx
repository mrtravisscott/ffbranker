import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserFfbRanking from './UserFfbRanking';
// import FfbRanking from './FfbRankingContainer/FfbRanking';
import PlayersList from './PlayersList';
// what is switch doing?
// return the first matching route

function Main() {
  return (
     <main>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PlayersList} />
        <Route path='/my-rankings' component={UserFfbRanking} />
      </Switch>
      </BrowserRouter>
     </main>
  );
}

export default  Main
