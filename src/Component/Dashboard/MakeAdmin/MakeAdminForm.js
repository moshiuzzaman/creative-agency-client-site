import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdminForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit =( data, e) => {
        fetch('https://obscure-temple-62164.herokuapp.com/addAdmin', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('Successfully added Admin')
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error(error)
            })
    };
    console.log(errors);
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row className='dashboard-admin-form'>
                    <Form.Group as={Col} md='6'  controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  type="email" name='email' placeholder="jon@gamil.com" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                    </Form.Group>
                    
                    <Button className="Button-admin-form mb-5 " type="submit">Send</Button>

                </Form.Row>

                
            </Form>
        </div>
    );
};

export default MakeAdminForm;