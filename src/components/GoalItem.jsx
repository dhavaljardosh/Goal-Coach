import React, {Component} from 'react'
import { connect } from 'react-redux';
import { completedRef } from '../firebase';
import { goalRef } from '../firebase'

class GoalItem extends Component {
  clickComplete(){
    let { email } = this.props.user;
    let { title, serverKey } = this.props.goal
console.log(serverKey)
    goalRef.child(serverKey).remove();
    // console.log(this.state)
    // console.log(this.props)
    completedRef.push({email,title})
    // goalRef;
  }
    render() {
        return (
            <div style={{
                marginBottom: 10,
                marginTop:10,
                border:'1px solid red'
            }}
            key={this.props.index}>
                <strong>{this.props.goal.title}</strong>
                <span style={{
                    color: 'lightgrey'
                }}>
                    &nbsp; | Submitted by: {this.props.goal.email}</span>
                <button
                    className="btn btn-small blue"
                    onClick={()=>this.clickComplete()}
                    style={{
                      marginLeft:10
                }}>Complete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{

  return {user:state.user}
}

export default connect(mapStateToProps,null)(GoalItem);