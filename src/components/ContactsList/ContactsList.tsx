import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { contactsSelector } from '../../store/contacts/reducer'
import { Contact } from './Contact/Contact'

export const ContactsList: FC = () => {
  const contacts = useTypedSelector(contactsSelector)

  return (
    <Container>
      <Row className="justify-content-md-center">
        {contacts.map((contact) => <Contact key={contact.pager} data={contact} />)}
      </Row>
    </Container>
  )
}
