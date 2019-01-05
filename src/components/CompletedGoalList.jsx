import React, { Component } from 'react'
import { connect } from 'react-redux';
import CompleteBox from './CompleteBox';

class CompletedGoals extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h4>Completed Goals</h4>
        {this.props.completedGoals.map(goal =>{
            return <CompleteBox goal={goal}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { completedGoals : state.completedGoals}
}

export default connect(mapStateToProps,null)(CompletedGoals);