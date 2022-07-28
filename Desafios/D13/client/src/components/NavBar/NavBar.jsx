import '../NavBar/NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='navBarContainer'>
                    <NavLink className="brand" to="/">D12</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div className="navLink">
                                <NavLink className="navLink__child" to="/">Home</NavLink>
                                <NavLink className="navLink__child" to="/info">Info</NavLink>
                                <NavLink className="navLink__child" to="/randoms">Random Numberes</NavLink>
                                <NavLink className="navLink__child" to="/products">Productos</NavLink>
                                <NavLink className="navLink__child" to="/messages">Mensajes</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar