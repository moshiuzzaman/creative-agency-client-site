import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ReviewForm = ({ user }) => {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        const reviewData = { ...data, img: user.photoURL }
        fetch('https://obscure-temple-62164.herokuapp.com/addReview', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review Successful')
                    e.target.reset();
                }
            })
    };
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control size="lg" type="text" name='name' placeholder="Your name" ref={register({ required: true })} />
                        <Form.Control size="lg" type="text" name='CompanyName' placeholder="Company’s name, Designation" ref={register({ required: true })} />
                        <Form.Control size="lg" name='Description' placeholder="Description" as="textarea" rows="3" ref={register({ required: true })} />
                        <Button className="Button-style" type="submit">Send</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ReviewForm;