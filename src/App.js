import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GetIDPage } from './components/GetIDPage.jsx';
import { HomePage } from './components/HomePage.jsx';
import { Documentation } from './components/Documentation.jsx';
import { Record } from './components/Record.jsx';
import Nav from 'react-bootstrap/Nav'


export const App = class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">

        <Router>
          <div>
            {/* Set defaultActiveKey to the current 'rest' path in order to
              switch the Nav tab to the current selected page */}
            <Nav variant="tabs" defaultActiveKey={window.location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/getid">Get ID</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/documentation">Documentation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/record">Record</Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Route exact path="/" >
                <HomePage/>
              </Route>
              <Route path="/getid" component={GetIDPage}>
                <GetIDPage />
              </Route>
              <Route path="/documentation" component={Documentation}>
                <Documentation />
              </Route>
              <Route path="/record" component={Record}>
                <Record />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App;