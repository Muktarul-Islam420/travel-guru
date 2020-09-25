import { BsStarHalf } from "react-icons/bs";
import React, { useState } from 'react';
import hotel from '../../fakeData';
import MapContainer from '../MapContainer/MapContainer';
import './Hotel.css'
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";


const Hotel = () => {
   const hotels = hotel;
   const [room,setRoom] = useState(hotels);
 
    return (
        <>
               <div className="navBar">
          <Navbar  sticky="top" variant="light" bg="transparent"  expand="lg" className="navBar">
              <Navbar.Brand> <span className="logo"><img src="https://img.techpowerup.org/200916/logo336.png" alt="" className="logo"/> </span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Form inline>
                  <FormControl  type="text" placeholder="Search your Destination..." className="mr-sm-2 " id="input" />
                  </Form>
                  <Nav.Link text="white"  className="linkIt" href="#link">News</Nav.Link>
                  <Nav.Link className="linkIt" href="#link">Destination</Nav.Link>
                  <Nav.Link className="linkIt" href="#link">Blog</Nav.Link>
                  <Nav.Link className="linkIt" href="#link">Contact</Nav.Link>
                  <Button variant="warning">Login</Button>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
      
        <div className="all-container">
            <div className="rooms-container">
            {
            room.map(room =><div  className="rooms-box">
                <div className="sub-room-box">
                <h5 className="room-title">{room.name}</h5>
            <img src={room.img} className="picture-box" alt=""/>
            <div className="text-box">
                <h6> {room.details.capacity}</h6>
                {room.details.facility}
            <p>{room.details.flexibility}</p>
                
                </div>
            <p><BsStarHalf className="rating-icon"/> <b>{room.rating}   <span className="rating-icon">||</span>  <i>    $ {room.price} </i> </b>\night</p>
            </div>
            </div>)
            }
            </div>
            <div className="map-container">
                <MapContainer/>
            </div>
        </div>
        </>
    );
};

export default Hotel;