import React, { FC, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useActions } from '../../hooks/useActions'
import { IContact } from '../../globalTypes/globalTypes'

interface IFullName {
  name: string,
  lastname: string
}
interface IOtherData {
  age: string,
  pager: string
}

export const NewContactForm: FC = () => {
  const { hideModal, createContact } = useActions()

  const [fullName, setFullName] = useState<IFullName>({ name: '', lastname: '' })
  const [otherData, setOtherData] = useState<IOtherData>({ age: '', pager: '' })
  const [submitError, setSubmitError] = useState<boolean>(false)

  const handleFullName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, id } = e.target
    if (value === '') {
      setFullName((prev) => ({ ...prev, [id]: value }))
      return
    }

    const isValid = /^[a-z]+$/i.test(value)
    if (isValid) setFullName((prev) => ({ ...prev, [id]: value }))
  }

  const handleOtherData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, id } = e.target
    if (value === '') {
      setOtherData((prev) => ({ ...prev, [id]: value }))
      return
    }

    const isValid = /^[0-9]+$/i.test(value)
    if (isValid) setOtherData((prev) => ({ ...prev, [id]: value }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const isError = [...Object.values(fullName), ...Object.values(otherData)].some((f: string) => f.trim() === '')

    if (isError) {
      setSubmitError(true)
      return
    }
    const contact: IContact = {
      name: fullName.name,
      lastname: fullName.lastname,
      age: Number(otherData.age),
      pager: Number(otherData.pager),
    }
    createContact(contact)
    hideModal()
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact name"
          value={fullName.name}
          onChange={handleFullName}
        />
        <Form.Text className="text-muted">
          Allowed characters is A-Z, a-z.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="lastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact lastname"
          value={fullName.lastname}
          onChange={handleFullName}
        />
        <Form.Text className="text-muted">
          Allowed characters is A-Z, a-z.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          value={otherData.age}
          onChange={handleOtherData}
        />
        <Form.Text className="text-muted">
          Allowed characters 0-9.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="pager">
        <Form.Label>Pager</Form.Label>
        <Form.Control
          type="text"
          placeholder="Pager"
          value={otherData.pager}
          onChange={handleOtherData}
        />
        <Form.Text className="text-muted">
          Allowed characters 0-9.
        </Form.Text>
      </Form.Group>

      {submitError && (
        <Form.Text className="text-muted warn-text mb-2">
          Please fill the fields correctly.
        </Form.Text>
      )}

      <Button variant="secondary" type="submit" className="mr-2">
        Cancel
      </Button>
      <Button variant="success" type="submit">
        Create
      </Button>
    </Form>
  )
}
