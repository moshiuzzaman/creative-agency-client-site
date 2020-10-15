import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import AddServiceForm from './AddServiceForm';

const AddService = () => {
    const admin = JSON.parse(sessionStorage.getItem('admin'))
    const history = useHistory()
    if (admin.admin === false) {
        history.push('/userServiceList')
        alert('Are you a admin? if Yes ! Then please log in with your admin email')
    }

    const user = JSON.parse(sessionStorage.getItem('user'))
    return (

        <div className="dashboard-section">
            <Row className='w-100'>
                <Col className='m-0 p-0' sm={4} md={2}>
                    <SideBar />
                </Col>
                <Col className='m-0 p-0' sm={8} md={10}>
                    <Row className=" dashboard-title pt-4 pb-2 px-5" >
                        <Col sm={6} md={6}>
                            <h3 >Add Service</h3>
                        </Col>
                        <Col sm={6} md={6}>
                            <h5 className='ml-auto'>{user.displayName}</h5>
                        </Col>
                    </Row>
                    <div className="m-4">
                        <AddServiceForm />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AddService;