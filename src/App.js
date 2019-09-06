import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home';
import Bio from './components/layout/Bio';
import { Button, Icon, Header, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/bio' component={Bio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
