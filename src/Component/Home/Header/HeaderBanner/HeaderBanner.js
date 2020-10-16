import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HeaderBanner = () => {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col className='banner-discription mb-4' md={5} sm={6}>
                    <h1 className="bannerHeadding mt-4">Let’s Grow Your  Brand To The Next Level</h1>
                    <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Button className='Button-style'>Hire Us</Button>
                </Col>
                <Col md={7} sm={6} className=''>
                    <img src={'https://i.ibb.co/JQ2Y29T/Frame-min.png'} alt="" className="bannerImage w-100 " />
                </Col>

            </Row>
        </Container>
    );
};

export default HeaderBanner;