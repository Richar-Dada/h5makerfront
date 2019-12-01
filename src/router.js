import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import List from './page/List'
import Editor from './page/Editor'

function BasicRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/list" component={List} />
        <Route exact path="/editor" component={Editor} />
        <Route path="*">
          <Redirect to="/list"></Redirect>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default BasicRouter;
