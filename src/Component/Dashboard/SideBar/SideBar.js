import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';
import { FaPlus, FaUserPlus } from 'react-icons/fa';
import { FcServices } from 'react-icons/fc';
import * as firebase from "firebase/app";
import { firebaseConfig } from '../../Login/config';

require("firebase/auth");
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const SideBar = () => {
    const user = JSON.parse(sessionStorage.getItem('admin'))
    const { admin } = user


    const logOutHandeler = () => {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
        });
        sessionStorage.clear()
    }
    return (
        <div className='sideBar pl-5 pt-3'>

            <Link to='/'><img src={'https://i.ibb.co/8Xd2N2b/logo.png'} alt="" className="dashboard-logo mb-4" /></Link>
            {
                !admin && <>

                    <Link to='/Order'><AiOutlineShoppingCart className='mr-2' /> Order</Link>
                    <Link to='/UserServiceList'><BsCardChecklist className='mr-2' />Service list</Link>
                    <Link to='/Review'><MdRateReview className='mr-2' />Review</Link>
                </>
            }
            {
                admin && <>
                    <Link to='/OrderedServiceList'><BsCardChecklist className='mr-2' />Ordered Services</Link>
                    <Link to='/AddService'><FaPlus className='mr-2' />Add Service</Link>
                    <Link to='/MakeAdmin'><FaUserPlus className='mr-2' />Make Admin</Link>
                    <Link to='/ServicesList'><FcServices className='mr-2' />Service List</Link>
                </>
            }
            <Link onClick={logOutHandeler} className='logoutBtn' to='/'><AiOutlineLogout className='mr-2' />Log Out</Link>
        </div>
    );
};

export default SideBar;