import React from 'react';
// Import React Route
import { Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Form from './components/Form';
import UserForm from './components/UserForm';
import NotFound from './components/404';
import Header from './components/Header';

// Show Main when we visit locahost:3000
// Show Form when we visit localhost:3000/form

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <Switch>
          {/* View Route to Show Main Component */}
          {/* locahost:3000/ should show Main */}
          <Route exact path="/" component={Main} />

          {/* View Route to Show Form Component */}
          {/* locahost:3000/form should show Form */}
          <Route path="/form" component={Form} />

          <Route path="/user" component={UserForm} />

          {/* 404 -- Catch all other views that don't have a route */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
