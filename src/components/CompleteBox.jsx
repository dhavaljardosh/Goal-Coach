import React, { Component } from 'react'

export default class CompleteBox extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.goal.title}</strong> | <span style={{color:'lightgrey'}}>Completed by: {this.props.goal.email}</span>
      </div>
    )
  }
}
