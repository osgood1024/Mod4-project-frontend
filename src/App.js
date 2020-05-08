// import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {Component} from 'react';
import {Home} from './Home';
import {Inventory} from './Inventory_list';
// import {Supplier} from './Supplier';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

// import Button from 'react-bootstrap/Button';


class App extends Component {

  state = {
    purveyors: [],
    products:[],
    restaurants:[],
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

    fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data=> this.setState({ 
      products: data
    }))

    fetch("http://localhost:3000/api/restaurants")
    .then(response => response.json())
    .then(data => this.setState({ 
      restaurants: data 
    }))

  }







  render(){
    console.log(this.state)
    const purveyorProduct= this.state.purveyors.filter(purveyor => purveyor.product === this.state.type)
    // console.log(type)
    const productType= this.state.products.filter(product => product.product_type === purveyorProduct)
    console.log(productType)
    // let purveyorType= this.state.purveyors.filter(foodtype=>foodtype.product === productType)
    
    return (
     <React.Fragment>

      <NavigationBar searchterm={this.handleSearch} search={this.state.search} />
      <Jumbotron/>
       <Layout>
        <Router>
          <Switch>
            <Route exact path ="/home" render={
              props =><Home {...props} purveyors={this.state.purveyors} products={this.state.products}  />
            } />
            <Route path ="/inventory" component={Inventory}/>
            {/* <Route path ="/supplier" component={Supplier}/> */}
            <Route component={NoMatch}/>
          </Switch>
        </Router>
       </Layout>




     </React.Fragment>
    );

  }
}

export default App;
