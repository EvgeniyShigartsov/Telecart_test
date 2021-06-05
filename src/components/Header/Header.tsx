import React, { FC } from 'react'
import { Navbar, Button } from 'react-bootstrap'

export const Header: FC = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Contacts</Navbar.Brand>
    <Button variant="outline-success">Add new contact</Button>
  </Navbar>
)
