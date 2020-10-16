import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import SingleServiceList from './SingleServiceList';
import './OrderedServiceList.css'
import { useHistory } from 'react-router-dom';

const AdminServiceList = () => {
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin === false) {
        history.push('/userServiceList')
        alert('Are you a admin? if Yes ! Then please log in with your admin email')
    }
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [orderdServices, setOrderdServices] = useState([])
    useEffect(() => {
        fetch(`https://obscure-temple-62164.herokuapp.com/allOrderdServices`)
            .then(response => response.json())
            .then(data => {
                setOrderdServices(data);
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
                    <div className="m-4 serviceListTable">
                        <Table    >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email </th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderdServices.map(orderdService => <SingleServiceList key={orderdService._id} orderdService={orderdService} />)
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminServiceList;