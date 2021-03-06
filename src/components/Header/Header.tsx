import React, { FC } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { useActions } from '../../hooks/useActions'
import { IOnModalOpenPayload } from '../../store/modal/types'
import { NewContactForm } from '../NewContactForm/NewContactForm'

export const Header: FC = () => {
  const { openModal } = useActions()

  const handleClick = (): void => {
    const modalPayload: IOnModalOpenPayload = {
      header: 'Add new contact',
      body: <NewContactForm />,
    }
    openModal(modalPayload)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      <Button variant="outline-success" onClick={handleClick}>Add new contact</Button>
    </Navbar>
  )
}
