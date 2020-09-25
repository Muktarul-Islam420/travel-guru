import React from 'react';
import {  Button, Card, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';
import './Header.css'
const Header = () => {
  
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
            
            <div className="Destination-container">
            
                <div className="cardContainer col-md-8">
                
                <div >
                <Card  className="card">
                <div className="imgBox">
                <Card.Img variant="top" className="cardImg" src="https://img.techpowerup.org/200916/sajek954.png" />
                </div>
                <div className="content">
                        <h2 className="name-text">SAJEK</h2>
                        <p className="details-text">Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. </p>
                        <footer>
                        <Link to="/booking"> <Button className="booking-btn">Booking</Button></Link>
                        </footer>
                       
                    </div>
                </Card>
                </div>
                <div >
                <Card className="card" >
                <div className="imgBox">
                <Card.Img variant="top" className="cardImg" src="https://img.techpowerup.org/200916/sreemongol364.png" />
                </div>
                    <div className="content">
                        <h2 className="name-text">SREEMONGOL</h2>
                        <p className="details-text"> Sreemangal is under Moulvibazar district of Sylhet, Sreemangal exists as a prime place for tourists’ attraction having earned.</p>
                        <footer>
                       <Link to="/booking"> <Button className="booking-btn">Booking</Button></Link>
                        </footer>
                    </div>
                </Card>
                </div>

                <div >
                <Card className="card">
                <div className="imgBox">
                <Card.Img variant="top" className="cardImg" src="https://img.techpowerup.org/200916/sundorbon680.png" />
                </div>
                <div className="content">
                        <h2 className="name-text">SUNDARBANS</h2>
                        <p className="details-text">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
                        <footer>
                        <Link to="/booking"> <Button className="booking-btn">Booking</Button></Link>
                        </footer>
                    </div>
                </Card>
                </div>
            </div>
      </div>
      </div>
    );
};

export default Header;