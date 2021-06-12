import React from 'react';
import firebase from 'firebase/app';
import { firebaseApp } from '../../base';
import LoginContainer from './LoginContainer';

class SignIn extends React.Component {
    // state = {
    //     user: ''
    // }

    async componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         this.authHandler({ user });
        //     }
        // });
    }

    authHandler = authData => {
        const { email } = authData.user;
        this.setState({ user: email })
        console.log(this.state);
    }

    authenticate = () => {
        const authProvider = new firebase.auth['GoogleAuthProvider']();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }
    signUp = (email, password) => {
        console.log('SigningUp...');
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed Up');
                console.log(u.user.email);
                // firebase.auth().signOut();
            })
            .catch((err) => {
                console.log(err.toString());
            })
    }

    render() {
        // if(!this.state.user){
        // return <Login authenticate={this.authenticate}/>
        return <LoginContainer authenticate={this.signUp} />
        // }
        // return this.props.children
    }
}

export default SignIn;