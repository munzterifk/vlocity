import React, {Component, Fragment}from 'react';
import {Nav, Navbar} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    render() {
        return (
            <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">RECIPE-BOOK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <LinkContainer to="/recipe"><Nav.Link >Recipe</Nav.Link></LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Fragment>
        )
    }
}

export default Header;