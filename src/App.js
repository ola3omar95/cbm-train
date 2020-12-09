import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Career from './components/pages/Career';
import Traning from './components/pages/Traning';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
/*import { Button } from '@material-ui/core';*/

function App() {
  return (
    <>
      <div className="App">
        {/*<Button color="primary" variant="outlined"> This is our first button</Button>*/ }
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/career' exact component={ Career } />
            <Route path='/traning' exact component={ Traning } />
            <Route path='/about-us' exact component={ AboutUs } />
            <Route path='/sign-in' component={ SignIn } />
            <Route path='/sign-up' component={ SignUp } />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
