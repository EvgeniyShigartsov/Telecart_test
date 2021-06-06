import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { IContact } from '../../../globalTypes/globalTypes'
import { useActions } from '../../../hooks/useActions'
import { DeleteContactForm } from '../../DeleteContactForm/DeleteContactForm'
import { IOnModalOpenPayload } from '../../../store/modal/types'
import { UpdateContactForm } from '../../UpdateContactForm/UpdateContactForm'

interface IContactProps {
  data: IContact
}

export const Contact: FC<IContactProps> = ({ data }) => {
  const { openModal } = useActions()

  const deleteHandler = (): void => {
    const modalPayload: IOnModalOpenPayload = {
      header: 'Delete contact',
      body: <DeleteContactForm name={data.name} lastname={data.lastname} pager={data.pager} />,
    }
    openModal(modalPayload)
  }
  const editHandler = (): void => {
    const modalPayload: IOnModalOpenPayload = {
      header: 'Edit contact',
      body: <UpdateContactForm contact={data} />,
    }
    openModal(modalPayload)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {data.name}
          {' '}
          {data.lastname}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Age:
          {' '}
          {data.age}
        </Card.Subtitle>
        <Card.Text>
          Pager:
          {' '}
          {data.pager}
        </Card.Text>
        <Button variant="primary" onClick={editHandler} className="mr-2">Edit contact</Button>
        <Button variant="secondary" onClick={deleteHandler}>Delete contact</Button>
      </Card.Body>
    </Card>
  )
}
