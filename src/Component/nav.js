import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function nav(porps) {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="../public/index.html">Movie Hub</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="../public/index.html">Home</Nav.Link>
            </Nav>
            <Form  inline>
                <FormControl type="text" placeholder="Search" id='movieName' className="mr-sm-2" />
                <Button onClick={porps.event} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )

}
 
export default nav;