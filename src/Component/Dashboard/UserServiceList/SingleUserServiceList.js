import React from 'react';
import { Col } from 'react-bootstrap';

const SingleUserServiceList = ({orderdService}) => {
    const { serviceName, details, icon,status } = orderdService
    console.log(orderdService);
    return (
        <Col md={5}>
            <div className="UserSingleService">
                <img className="serviceListImage " src={`data:image/png;base64,${icon.img}`} alt="" />
                <p className={`serviceStatus-${status} rounded `}>{status}</p>
                <h5 className=" mt-4 mb-3">{serviceName}</h5>
                <p >{details}</p>
            </div>
        </Col>
    );
};

export default SingleUserServiceList;