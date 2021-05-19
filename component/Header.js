import { Navbar, Nav } from 'react-bootstrap';

import React, { Component } from 'react'
export class Header extends Component {

    render() {
        return (
            <>
                <h2 className="text-light">Motivation</h2>

                <Navbar collapseOnSelect expand="lg" variant="dark" className="Header">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">                    
                    <Nav className="mr-auto">
                        <Nav.Link className="link-nav" href='/dash'>All</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Actions</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Podcast</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Video</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Downloads</Nav.Link>
                        <Nav.Link id="playAll" className="link-nav btn-link text-dark" href="/dash">Play All</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default Header


