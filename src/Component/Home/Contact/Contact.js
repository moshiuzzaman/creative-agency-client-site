import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-section py-5 pb-5 mt-5" >
            <Container className='mt-5'>
                <Row>
                    <Col md={6}>
                        <h2>Let us handle your project, professionally.</h2>
                        <p className='mt-4'>With well written codes, we build amazing apps for all <br />platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className='p-4' type="email" placeholder="Your email address" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className='p-4' type="text" placeholder="Your name / company’s name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control className='p-4' as="textarea" rows="7" placeholder="Your message" />
                            </Form.Group>
                            <Button className='Button-style'>Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;