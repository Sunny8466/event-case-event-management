// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Anavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"teal"}}>
      <Container>
        <Navbar.Brand><Link to='/ahome' style={{color:"white",textDecoration:"none"}}>Event Manage(Admin)</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/ahome" style={{padding:"10px",color:"white",textDecoration:"none"}}>Dashboard</Link>
            <Link to="/users" style={{padding:"10px",color:"white",textDecoration:"none"}}>Users</Link>
            <Link to="/hosts" style={{padding:"10px",color:"white",textDecoration:"none"}}>Hosts</Link>
            <Link to="/" style={{padding:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <h4 style={{color:"white",paddingTop:"0px"}}>({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anavbar;
