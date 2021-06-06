import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { IContact } from '../../../globalTypes/globalTypes'

interface IContactProps {
  data: IContact
}

export const Contact: FC<IContactProps> = ({ data }) => (
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
      <Button variant="primary" className="mr-2">Edit contact</Button>
      <Button variant="secondary">Delete contact</Button>
    </Card.Body>
  </Card>
)
