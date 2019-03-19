import * as firebase from 'firebase/app';
import React, { Component } from 'react';

export default class Login extends Component {
    componentDidMount() {
        console.log('on server')
        // This is done as the import of firebaseui depends on the `window` global.
        if (typeof window === 'undefined') {
            return;
        }
        const firebaseui = require('firebaseui');
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebase-ui-auth', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: window.location.origin,
        });
    }
    render() {
        return <div id="firebase-ui-auth"></div>;
    }
}
