import React from 'react'
import {Card,ListGroup,ListGroupItem,Form} from "react-bootstrap"
// import styled from 'styled-components';
// import  Meat from '../assets/meat.jpg';

class PurveyorCard extends React.Component{

  state={
    toggle : false,


  }


  handleToggle=()=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }



  // handleClick=(id)=>{
    
  //   let productId=this.props.product.filter(pid=>pid.id === id)

  // }




  
  render(){
   
    let image =`./${this.props.purveyor.product}.jpg`

  
    return (
      <Card className="food-category">
        
      <Card.Body>

        <Card.Title> {this.props.purveyor.name} </Card.Title>
      
        <Card.Img src={image} onClick={()=>this.handleToggle()}/>

        {this.state.toggle &&  

        <ListGroup className="list-group-flush" >
        
            <ListGroupItem>
           {
           this.props.product.map(product=> <Form.Check type="checkbox" label={product.name} onClick={null} />   )
           }
            </ListGroupItem>
           
        </ListGroup>

        }
         
      </Card.Body>

      
  
      </Card>


      
      
  
)

  }


  
}








export default PurveyorCard