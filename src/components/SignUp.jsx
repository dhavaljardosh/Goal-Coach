import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {Link} from 'react-router-dom'
export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    onSignUp() {
        console.log(this.state);
        const {email, password} = this.state;

        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div
                className='form-inline'
                style={{
                margin: '5%'
            }}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={(e) => this.setState({password: e.target.value})}/>
                    <button
                        className="btn waves-effect waves-light blue"
                        type="button"
                        onClick={() => this.onSignUp()}>Sign Up</button>
                    <p
                        style={{
                        color: 'red',
                        fontWeight: 'bold'
                    }}>{this.state.error.message}</p>
                </div>
                <Link to={'/signIn'}>Already a User?</Link>
            </div>
        )
    }
}
