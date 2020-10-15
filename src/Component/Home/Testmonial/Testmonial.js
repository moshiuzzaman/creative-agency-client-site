import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SingleTestmonial from './SingleTestmonial';
import './Testmonial.css'

const Testmonial = () => {
    const [reviews, setReview] = useState([])
    const reviewReverse =reviews.reverse()
    const getNew6Review= reviews.slice(0,6)

    useEffect(() => {
        fetch('https://obscure-temple-62164.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <Container className='py-5 mb-5'>
            <h2 align="center" className=" py-5">Clients  <span className="text-success">Feedback</span></h2>
            <Row className='pb-5 mb-5 mb-sm-0 justify-content-center'>
                {
                    reviews.length === 0 ? <Spinner className="mb-5  p-4" animation="border" /> :
                    getNew6Review.map(rv => <SingleTestmonial review={rv} key={rv._id} />)
                }
            </Row>
        </Container>
    );
};

export default Testmonial;