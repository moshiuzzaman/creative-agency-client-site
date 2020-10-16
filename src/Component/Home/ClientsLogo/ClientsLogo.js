import React from 'react';
import { Container } from 'react-bootstrap';
import './ClientsLogo.css'
const ClientsLogo = () => {
    return (
        <Container>
            <div align="center" className="clients-logo my-4">
                <img src={'https://i.ibb.co/gZtCmy9/google.png'} alt="" />
                <img src={'https://i.ibb.co/1QQ8RrX/netflix.png'} alt="" />
                <img src={'https://i.ibb.co/9HJYnLQ/slack.png'} alt="" />
                <img src={'https://i.ibb.co/J7fL64t/uber.png'} alt="" />
                <img src={'https://i.ibb.co/RC6kBJc/airbnb.png'} alt="" />
            </div>
        </Container>
    );
};

export default ClientsLogo;