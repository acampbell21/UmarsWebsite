import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home';
import Bio from './components/layout/Bio';
import Media from './components/layout/Media';
import ContactForm from './components/layout/ContactForm';
import Education from './components/layout/Education';
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
            <Route exact path='/media' component={Media} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/contactForm' component={ContactForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
