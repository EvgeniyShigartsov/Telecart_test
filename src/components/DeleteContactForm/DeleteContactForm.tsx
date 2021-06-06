import React, { FC } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useActions } from '../../hooks/useActions'

interface IDeleteContactFormProps {
  name: string
  lastname: string
  pager: number
}

export const DeleteContactForm: FC<IDeleteContactFormProps> = ({ name, lastname, pager }) => {
  const { deleteContact, hideModal } = useActions()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    deleteContact(pager)
    hideModal()
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Text className="text-muted delete-text">
        Are you sure want to delete contact
        {' '}
        {name}
        {' '}
        {lastname}
        {' '}
        ?
      </Form.Text>
      <Button variant="success" type="button" className="mr-2" onClick={hideModal}>
        Cancel
      </Button>
      <Button variant="secondary" type="submit">
        Delete contact
      </Button>
    </Form>
  )
}
