import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../img/logo/download.png';
import './Header.css';

const Header = () => {
    const style = {
        color: "white"
    }
    return (
        <div className="header-bg">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <img className="logo me-2" src={logo} alt="" />
                    <Navbar.Brand className="logo-name fs-3" href="#home">PureSmile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  text-light">
                            <NavLink activeStyle={style} className="nav-link" to="/home">Home</NavLink>
                            <NavLink activeStyle={style} className="nav-link" to="/about-us">About Us</NavLink>
                            <NavLink activeStyle={style} className="nav-link" to="/hosgme">sgsdgs</NavLink>

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