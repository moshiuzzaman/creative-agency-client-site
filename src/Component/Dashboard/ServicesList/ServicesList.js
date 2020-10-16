import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import SingleService from './SingleService';

const ServicesList = () => {
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin === false) {
        history.push('/userServiceList')
        alert('Are you a admin? if Yes ! Then please log in with your admin email')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://obscure-temple-62164.herokuapp.com/services`)
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    const serviceDeleteHandler = (id) => {
        fetch(`https://obscure-temple-62164.herokuapp.com/serviceDelete/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('service Delete successfully')
                    const newServices = Services.filter(s => s._id !== id)
                    setServices(newServices)
                }
            })
    }
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
                                Services.map(s => <SingleService serviceDeleteHandler={serviceDeleteHandler} key={s._id} Service={s} />)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );

};

export default ServicesList;