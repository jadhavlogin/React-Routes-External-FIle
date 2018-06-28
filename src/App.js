import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Link  } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {
  render() {
    const routeComponents = Routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <div className="App">
        <p className="App-intro">
          <BrowserRouter>
            <div>
              <h2 className="App-title">Welcome to React Router 4</h2>
              <p className="NavigationLinks">
                  <span><Link to={'/calculator'}>Calculator</Link></span>
                  <span><Link to={'/feed'}>Feed</Link></span>
                  <span><Link to={'/appThree'}>App three</Link></span>
                  <span><Link to={'/appFour'}>App four</Link></span>
               </p>
                <hr />
                <Switch>
                    {routeComponents}
                </Switch>
              </div>
          </BrowserRouter>
        </p>
      </div>
    );
  }
}

export default App;
