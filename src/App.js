import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jeux from './components/pages/Jeux';
import SignUp from './components/pages/SignUp';
import partenaires from "./components/pages/partenaires";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Jeux' component={Jeux} />
          <Route path='/partenaires' component={partenaires} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
