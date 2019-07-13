import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Park from './pages/Park2';

import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Wrapper>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/park" component={Park} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
