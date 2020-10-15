import React, { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SingleService from './SingleService';
import './Services.css'
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://obscure-temple-62164.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container align="center" className='py-5'>
            <h2 className=" py-5"> Provide awesome <span className="text-success">services</span></h2>
            <Row className='justify-content-center'>
                {
                    services.length === 0 ? <Spinner className="mb-5  p-4" animation="border" /> :  
                    services.map(s => <SingleService key={s._id} service={s} />)
                }
                
                
              
            </Row>
        </Container>
    );
};

export default Services;