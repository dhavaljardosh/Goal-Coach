import React, {Component} from 'react'
import {firebaseApp} from '../firebase';
import AddGoals from './AddGoals'
import GoalList from './GoalList';
import CompletedGoalList from './CompletedGoalList';

export default class App extends Component {
    signOut() {
        firebaseApp
            .auth()
            .signOut();
    }
    render() {
        return (
            <div style={{
                margin:'5%',
                padding: '2%',
                borderRadius:10
            }}
                className="card z-depth-4"
            >
                <h2>Goals</h2>
                <AddGoals/>
                <hr/>
                <GoalList/>
                <hr/>
                <CompletedGoalList/>
                <button
                    style={{position:'absolute', right:20, top:20}}
                    className="btn waves-effect waves-light red"
                    onClick={() => this.signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }
}
