import React from 'react'
import PurveyorCard from './PurveyorCard'

class PurveyorContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.purveyors.map(purveyor => <PurveyorCard purveyor={purveyor}/>)}
      </div>
    )
  }
} 

export default PurveyorContainer