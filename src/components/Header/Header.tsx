import React, { FC } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { useActions } from '../../hooks/useActions'
import { IOnOpenPayload } from '../../store/modal/types'

export const Header: FC = () => {
  const { openModal } = useActions()

  const handleClick = (): void => {
    const payload: IOnOpenPayload = {
      header: 'Add new contact',
      body: <div>Body!</div>,
      onOkCallback: null,
    }
    openModal(payload)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      <Button variant="outline-success" onClick={handleClick}>Add new contact</Button>
    </Navbar>
  )
}
