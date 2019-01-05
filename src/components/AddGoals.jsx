import React, {Component} from 'react'
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoals extends Component {

    constructor() {
        super()
        this.state = {
            title: ''
        }

    }

    onChange(){
        const { title } =  this.state;
        const {email} = this.props;
        this.setState({title:'jkn'})
        goalRef.push({email, title})
        console.log(this.state)
    }
    render() {
        return (
            <div className="form-inline">
                <div className="" style={{display:'flex', alignItems:'center'}}>
                    <input
                        type="text"
                        placeholder="Add a goal"
                        style={{
                        marginRight: '5px',
                        flex:7
                    }}
                        onChange={e => this.setState({title: e.target.value})}/>
                    <button
                        className="btn waves-effect waves-light blue"
                        onClick={()=>this.onChange()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {email} = state.user
    return {email};
}

export default connect(mapStateToProps,null)(AddGoals)
