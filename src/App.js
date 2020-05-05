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

import PurveyorContainer from './components/PurveyorContainer';

// import Button from 'react-bootstrap/Button';


class App extends Component {

  state = {
    purveyors: [],
    search: ''
  }

handleSearch= (e) =>{
    this.setState({
      search: e.target.value
    },()=>console.log(this.state))
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/purveyors")
    .then(response => response.json())
    .then(data => this.setState({ 
      purveyors: data
    }))
  }

  render(){
    return (
     <React.Fragment>

      <NavigationBar searchterm={this.handleSearch} search={this.state.search} />
      <Jumbotron/>
       <Layout>
        <Router>
          <Switch>
            <Route exact path ="/home" component={Home} />
            <Route path ="/inventory" component={Inventory}/>
            <Route path ="/supplier" component={Supplier}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
       </Layout>

       <PurveyorContainer purveyors={this.state.purveyors}/>



     </React.Fragment>
    );

  }
}

export default App;
