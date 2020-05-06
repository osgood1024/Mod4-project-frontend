import React from 'react'
import PurveyorCard from './components/PurveyorCard';


export const Home =(props) => (

    <div className='food-container'>
    {props.purveyors.map(purveyor => <PurveyorCard purveyor={purveyor}/>)}
    </div>

)
