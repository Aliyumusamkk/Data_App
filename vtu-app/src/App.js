import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Loginform from './components/Loginform';
import Account from './components/Account';

function App() {
  return (
    <Router>
    <div className="content">
      <Switch>  
          <Route path="/" component={Home} />
          <Route path="/Account" component={Account} />
          <Route path="/Loginform" component={Loginform} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
