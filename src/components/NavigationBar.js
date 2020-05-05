import React from 'react'
import { Nav,Navbar} from "react-bootstrap";
import styled from  'styled-components';

const Styles =styled.div `

.navbar{
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #FF8C00;

    &:hover{
        color: white;
    }
}

`;

export const NavigationBar=()=>(
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/home">Los Paisanos Del Tacos</Navbar.Brand>
            <Navbar.Toggle aria-controls= "basic-navbar-nav"/>
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inventory">Inventory List</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/supplier">Supplier</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)