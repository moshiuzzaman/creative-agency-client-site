import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './config';
import { useContext } from 'react';
import { UserContext } from '../../App';

import * as firebase from "firebase/app";
require("firebase/auth");
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();



    const { from } = location.state || { from: { pathname: "/" } };
    const [allData, setAllData] = useContext(UserContext)
    const singInHandeler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const newUser = { ...allData }
            newUser.user = result.user;
            sessionStorage.setItem('user', JSON.stringify(result.user))
            setAllData(newUser)

            const userData = result.user
            fetch(`https://obscure-temple-62164.herokuapp.com/admin?email=${result.user.email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(' fff object');
                    if (data.length == 0) {
                        const admin = {  admin: false}
                        sessionStorage.setItem('admin', JSON.stringify(admin))
                        history.push(from)
                    }
                    else if (data.length > 0) {
                        const admin = {  admin: true}
                        sessionStorage.setItem('admin', JSON.stringify(admin))
                        history.push('/AdminServiceList')
                    }
                })




        })
    }

    return (
        <Container align="center" className='p-5'>
            <Link to='/'><img src={'https://i.ibb.co/8Xd2N2b/logo.png'} alt="" className="login-logo" /></Link>
            <div className="login-section m-5">
                <h4 className="mb-4">Login With</h4>
                <Button onClick={singInHandeler} className="login-button"><FcGoogle className='login-button-icon' /> Continue with Google</Button>
                <p className='mt-2'>Don’t have an account? <span  onClick={singInHandeler} className="create-account">Create an account</span></p>

            </div>
        </Container>
    );
};

export default Login;