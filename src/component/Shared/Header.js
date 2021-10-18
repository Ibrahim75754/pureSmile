import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../img/logo/download.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className="logo me-2" src={logo} alt="" />
                    <Navbar.Brand className="logo-name fs-3" href="#home">PureSmile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#priing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>

                            <Navbar.Text className="me-2">
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                            <Button variant="outline-light">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;