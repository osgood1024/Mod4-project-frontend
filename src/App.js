// import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {Component} from 'react';
import {Home} from './Home';
import {Inventory} from './Inventory_list';
import {Supplier} from './Supplier';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

// import Button from 'react-bootstrap/Button';


class App extends Component {
  render(){
    return (
     <React.Fragment>

      <NavigationBar/>
      <Jumbotron/>
       <Layout>
        <Router>
          <Switch>
            <Route exact path ="/home" component={Home}/>
            <Route path ="/inventory" component={Inventory}/>
            <Route path ="/supplier" component={Supplier}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
       </Layout>


     </React.Fragment>
    );

  }
}

export default App;
