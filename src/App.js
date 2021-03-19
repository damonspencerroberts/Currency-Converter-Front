import React from 'react';
import Main from './container/main';
import Records from './container/records';
import "./css/index.scss";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route>
          <Records path="/records" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
