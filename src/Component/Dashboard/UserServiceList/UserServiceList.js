import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SingleUserServiceList from './SingleUserServiceList';
import './UserServiceList.css'

const UserServiceList = () => {
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin) {
        history.push('/OrderedServiceList')
        alert('admin cannot Access user Servise list page , You please check your Service List for see Orderd Service')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [orderdServices, setOrderdServices] = useState([])

    useEffect(() => {
        fetch(`https://obscure-temple-62164.herokuapp.com/orderdServices?email=${user.email}`)
            .then(response => response.json())
            .then(data => {
                setOrderdServices(data)
            })
    }, [])

    return (
        <div className="dashboard-section">
            <Row className='w-100'>
                <Col className='m-0 p-0' sm={4} md={2}>
                    <SideBar />
                </Col>
                <Col className='m-0 p-0' sm={8} md={10}>
                    <Row className=" dashboard-title pt-4 pb-2 px-5" >
                        <Col sm={6} md={6}>
                            <h3 >Service List</h3>
                        </Col>
                        <Col sm={6} md={6} className="d-flex" >
                            <h5 className='ml-auto'>{user.displayName}</h5>
                            <img className='dashboard-user-image' src={user.photoURL} alt="" />
                        </Col>
                    </Row>
                    <div className="m-4">
                        <Row>
                            {
                                orderdServices.map(s => <SingleUserServiceList key={s._id} orderdService={s} />)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UserServiceList;