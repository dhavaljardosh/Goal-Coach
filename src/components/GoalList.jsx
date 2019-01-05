import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalRef, completedRef} from '../firebase'
import {setGoals, completedGoals} from '../actions'
import GoalItem from './GoalItem'

class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let {email, title} = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey});
            })
            // console.log(goals)
            this
                .props
                .setGoals(goals);
        })

        completedRef.on('value', snap=>{
            let completedGoals = [];
            snap.forEach(completedGoal => {
                let { email, title } = completedGoal.val();
                completedGoals.push({email, title})
            })
            console.log(completedGoals);
            this.props.completedGoals(completedGoals)
        })
    }
    render() {
        return (
            <div>
                <h5>Goal List</h5>
                {this.props.goals.map((goals,index)=>{
                  return <GoalItem goal={goals} key={index} />
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    const {goals} = state;
    return {goals};
}

export default connect(mapStateToProps, {setGoals, completedGoals})(GoalList);