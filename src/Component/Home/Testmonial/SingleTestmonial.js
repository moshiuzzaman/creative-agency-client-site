import React from 'react';
import { Col } from 'react-bootstrap';

const SingleTestmonial = ({ review }) => {
    const { name, img, CompanyName, Description } = review
    
    return (
        <Col md={4}>
            <div className="singleTestmonial border border-dark my-3 py-3 pl-3 pr-1">
                <div className="d-flex ">
                    <img src={img} alt="" />
                    <div className=" ml-3">
                        <h5 className="m-0">{name}</h5>
                        <p>{CompanyName}</p>
                    </div>
                </div>
                <p>{Description}</p>
            </div>
        </Col>
    );
};

export default SingleTestmonial;