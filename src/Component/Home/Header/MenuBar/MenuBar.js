import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import { firebaseConfig } from '../../../Login/config';
require("firebase/auth");


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const MenuBar = () => {
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    let user = {
        email: ''
    }
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const finalUser = { ...user, ...newUser }
    return (
        <Container>
            <Navbar className='py-5' expand="lg">
                <Navbar.Brand href="#home">
                    <img src={'https://i.ibb.co/8Xd2N2b/logo.png'} alt="" className="home-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menu-link">
                        <Link to="/">Home</Link>
                        <Link to="/Portfolio">Our Portfolio</Link>
                        <Link to="/Team">Our Team</Link>
                        <Link to="/Contact">Contact</Link>
                        {
                            finalUser.email ?
                                <div>
                                    {
                                        admin.admin ? <Link className="p-0 m-0" to='/OrderedServiceList'><Button className='Button-style ml-4'>Dashboard</Button> </Link> : <Link className="p-0 m-0" to='/userServiceList'><Button className='Button-style ml-4'>Dashboard</Button> </Link>
                                    }
                                </div>
                                : <Link className="p-0 m-0" to='/login'><Button className='Button-style ml-4'>Login</Button> </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default MenuBar;