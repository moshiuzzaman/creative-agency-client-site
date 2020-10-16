import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const OrderForm = ({ userAndService }) => {
    const [spiner, setSpinner] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        setSpinner(true);
        const orderedData = {
            ...data,
            icon: userAndService.service.image,
            details: userAndService.service.details,
            userEmail: userAndService.user.email,
            status: 'pending'
        }

        fetch('https://obscure-temple-62164.herokuapp.com/addOrder', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSpinner(false)
                    alert('Orderd Successful')
                    e.target.reset();

                }
            })
    };
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control size="lg" type="text" name='name' defaultValue={userAndService.user.displayName} placeholder="Your name / company’s name" ref={register({ required: true })} />
                        <Form.Control size="lg" type="email" name='orderdEmail' defaultValue={userAndService.user.email} placeholder="Enter email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                        <Form.Control size="lg" type="text" name='serviceName' defaultValue={userAndService.service.title} placeholder="Graphic Design" ref={register({ required: true })} />
                        <Form.Control size="lg" name='ProjectDetails' placeholder="Project Details" as="textarea" rows="3" ref={register({ required: true })} />
                        <Form.Control size="lg" type="text" name='Price' placeholder="Price" ref={register({ required: true })} />
                        <Button className="Button-style" type="submit">
                            {
                                spiner ? <><Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                    Loading...</> : 'Send'
                            }
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default OrderForm;