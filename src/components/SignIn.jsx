import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {Link} from 'react-router-dom';

export default class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    onSignIn() {
        console.log(this.state);
        const {email, password} = this.state;

        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({error: ''})
            })
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
                <h2>Sign In</h2>
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
                        onClick={() => this.onSignIn()}>Sign In</button>
                    <p
                        style={{
                        color: 'red',
                        fontWeight: 'bold'
                    }}>{this.state.error.message}</p>
                </div>
                <Link to={'/signup'}>New User?</Link>
            </div>
        )
    }
}
