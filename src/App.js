import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewPage } from './components/NewPage.jsx';
import { HomePage } from './components/HomePage.jsx';
import { Documentation } from './components/Documentation.jsx';
import Nav from 'react-bootstrap/Nav'

import { Tabs, Tab, ControlledTabs,  } from 'react-bootstrap';

export const App = class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">

        <Router>
          <div>

          
{/*
<nav>
            
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="homepage-tab" data-toggle="tab" href="/" role="tablist" aria-controls="nav-homepage" aria-selected="true" eventKey="homepage">Search HAPI</a>
                <a className="nav-item nav-link" id="newpage-tab" data-toggle="tab" href="/newpage" role="tablist" aria-controls="nav-newpage" aria-selected="false" eventKey="newpage">Get ID</a>
                <a className="nav-item nav-link" id="documentation-tab" data-toggle="tab" href="/documentation" role="tablist" aria-controls="nav-documentation" aria-selected="false" eventKey="documentation">Documentation</a>
              
              </div>
              
            </nav>

*/}
              
            
            {/*<nav>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab className="nav-item nav-link active" id="homepage-tab" data-toggle="tab" href="/" role="tablist" aria-controls="nav-homepage" aria-selected="true" eventKey="homepage" >
                 
                </Tab>
                <Tab eventKey="newpage" title="newpage">
                  
                </Tab>
                <Tab eventKey="documentation" title="documentation">
               
                </Tab>
              </Tabs>
            </nav>*/}
            
            <Nav variant="tabs" defaultActiveKey={window.location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/newpage">New page</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/documentation">Documentation</Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Route exact path="/" >
                <HomePage/>
              </Route>
              <Route path="/newpage" component={NewPage}>
                <NewPage />
              </Route>
              <Route path="/documentation" component={Documentation}>
                <Documentation />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App;