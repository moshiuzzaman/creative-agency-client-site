import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './ServicesList.css'

const SingleService = ({ Service, serviceDeleteHandler }) => {

    const { title, image, details, _id } = Service
    return (
        <Col md={5}>
            <div className="SingleService">
                <img className="serviceImage " src={`data:image/png;base64,${image.img}`} alt="" />
                <Button onClick={() => serviceDeleteHandler(_id)} variant="danger" className=' service-delete-button'> Delete</Button>
                <h5 className=" mt-4 mb-3">{title}</h5>
                <p >{details}</p>
            </div>
        </Col>
    );
};

export default SingleService;






    //     
