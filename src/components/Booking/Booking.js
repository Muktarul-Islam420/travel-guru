import React from 'react';
import { Button, Card, Col, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css'


const Booking = () => {
    // const handleBooking = (e) => {
    //     let isFieldValid = true;
    //     if(e.target.name === 'home'){
    //         isFieldValid = /^[A-z][a-z]/.test(e.target.value);
    //     }
    //     if(e.target.name === 'destination'){
    //         isFieldValid = /^[A-z][a-z]/.test(e.target.value);
    //     }
    //     if(!isFieldValid ){
    //        window.alert('Fillup the destination field');
    //     }
        
    // }
    return (
        <div className="allContainer">
            <div className="navBar">
            <Navbar  sticky="top" variant="light" bg="transparent"  expand="lg" className="navBar">
                    <Navbar.Brand> <img src="https://img.techpowerup.org/200916/logo336.png" alt="" className="logo"/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                        <FormControl  type="text" placeholder="Search your Destination..." className="mr-sm-2 " id="input" />
                        </Form>
                        <Nav.Link text="white"  className="linkIt" href="#link"><span className="nav-text">News</span></Nav.Link>
                        <Nav.Link className="linkIt" href="#link"><span className="nav-text">Destination</span></Nav.Link>
                        <Nav.Link className="linkIt" href="#link"><span className="nav-text">Blog</span></Nav.Link>
                        <Nav.Link className="linkIt" href="#link"><span className="nav-text">Contact</span></Nav.Link>
                        <Button variant="warning">Login</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <br/>
            
            <div className="booking-container">
                <br/>
                <br/>
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><span className="form-text">Origin</span></Form.Label>
                        <Form.Control type="text" placeholder="Panchagarh" />
                        <Form.Text className="text-muted">
                        We'll never share your location with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><span className="form-text">Destination</span></Form.Label>
                        <Form.Control type="text" placeholder="Sundarban" />
                    </Form.Group>

                   
                        <div className="date-container">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="Panchagarh" name="home" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" placeholder="Sajek velly" name="destination" />
                            </Form.Group>
                        </Form.Row>
                        </div>
                    <Link to="/hotel"> 
                    <Button  variant="warning" type="submit" className="booking-btn" > Start Booking </Button>
                    </Link>
                    
                </Form>
            </div>
      </div>
    );
};

export default Booking;