import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ButtonNew from '../components/ButtonNew';
import IndexApp from '../components/Index';

class Routes extends React.Component{
    render() {
        return(
    <Router>
    <div>
    <Route path="/" component={IndexApp} />
      <Route path="/button" component={ButtonNew} />
    </div>
  </Router>
        )

    }
}

export default Routes;