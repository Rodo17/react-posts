import React from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Posts from '../components/Posts';
import Comments from '../components/Comments';

const Routes = () => (
<Router>
    <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/comments" component={Comments} />
    </Switch>
</Router>
);

export default Routes;