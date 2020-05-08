import React from 'react'
import PurveyorCard from './components/PurveyorCard';
import ProductTable from './components/ProductTable';



export class Home extends React.Component{


    
   render(){


       return(
       
           <div className='food-container'>
           {this.props.purveyors.map(purveyor => <PurveyorCard  key={purveyor.id} purveyor={purveyor} product={this.props.products.filter(product => product.product_type === purveyor.product)}/> )}
           {/* {this.props.produts.map(product=><PurveyorCard product={product} >)} */}
            
           {/* {this.props.products.map(product =><ProductTable key={product.id} product={product} />)} */}
           {<ProductTable/>}

           </div>
          
               
    


       
       )
    
   }

      

    }
