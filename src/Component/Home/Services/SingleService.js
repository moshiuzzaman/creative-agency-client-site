import React from 'react';
import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SingleService = ({ service }) => {
    const { title, details, image } = service
    const [allData, setAllData] = useContext(UserContext)
    const handleServiceOrder = () => {
        const newData = { ...allData, service };
        setAllData(newData);
    }
    return (
        <Col md={4} sm={6}>
            <Link onClick={handleServiceOrder} to='/Order'>
                <div className="singleService">
                    <div >
                        <img className="serviceImage" src={`data:image/png;base64,${image.img}`} alt="" />
                    </div>
                    <h5 className="service-title mt-4 mb-3">{title}</h5>
                    <p className="service-details">{details}</p>
                </div>
            </Link>
        </Col>
    );
};

export default SingleService;