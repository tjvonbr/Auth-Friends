import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar-container">
          <li>
            <Link to='/api/login'>Login</Link>
          </li>
          <li>
            <Link to='/api/friends'>See Friends</Link>
          </li>
        </ul>
        <Route path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
