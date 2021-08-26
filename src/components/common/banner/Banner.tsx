import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.png'
import banner2 from 'assets/images/banner2.png'
const Banner = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        <ListGroup.Item>Desktop</ListGroup.Item>
                        <ListGroup.Item>Leptop</ListGroup.Item>
                        <ListGroup.Item>Men s Watch</ListGroup.Item>
                        <ListGroup.Item>Microwave Oven</ListGroup.Item>
                        <ListGroup.Item>Motor Bike</ListGroup.Item>
                        <ListGroup.Item>Refrigerator</ListGroup.Item>
                        <ListGroup.Item>Smart Phone</ListGroup.Item>
                        <ListGroup.Item>Smart TV & Android TV</ListGroup.Item>
                        <ListGroup.Item>Speaker</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={9} className="mt-3">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

            </Row>
        </Container>
    );
};

export default Banner;