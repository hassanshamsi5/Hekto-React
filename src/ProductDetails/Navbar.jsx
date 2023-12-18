import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function BasicExample() {
    const [cartItemCount, setCartItemCount] = useState(0)

    useEffect(() => {
        loadCartItemsFromLocalStorage();
    }, []);

    const loadCartItemsFromLocalStorage = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItemCount(cartItems.length);
        // // window.location.reload()
        console.log('cartItems :>> ', cartItems);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand className='fw-bold' href="/">FakeApiStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/api">Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/addToCart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>Cart
                            <Badge bg="danger">{cartItemCount}</Badge>
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/signin">signin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

        