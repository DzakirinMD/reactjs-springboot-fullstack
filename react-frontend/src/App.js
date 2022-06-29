import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListAccountsComponent from './components/ListAccountsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAccountsComponent from './components/CreateAccountsComponent';
import UpdateAccountsComponents from './components/UpdateAccountsComponents';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAccountsComponent}></Route>
                          <Route path = "/accounts" component = {ListAccountsComponent}></Route>
                          <Route path = "/create-accounts" component = {CreateAccountsComponent}></Route>
                          <Route path = "/update-account/:id" component = {UpdateAccountsComponents}></Route>
                          <Route path = "/view-account/:id" component = {ViewEmployeeComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
