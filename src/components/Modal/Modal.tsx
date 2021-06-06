import React, { FC } from 'react'
import { Modal as ModalBootsrap, Button } from 'react-bootstrap'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Modal: FC = () => {
  const { hideModal } = useActions()
  const isOpen = useTypedSelector((state) => state.modal.isOpen)
  const heading = useTypedSelector((state) => state.modal.header)
  const body = useTypedSelector((state) => state.modal.body)
  const onOkCallback = useTypedSelector((state) => state.modal.onOkCallback)

  const handleOk = (): void => {
    hideModal()
    if (typeof onOkCallback === 'function') {
      onOkCallback()
    }
  }
  return (
    <ModalBootsrap
      show={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={hideModal}
    >
      <ModalBootsrap.Header closeButton>
        <ModalBootsrap.Title id="contained-modal-title-vcenter">
          {heading}
        </ModalBootsrap.Title>
      </ModalBootsrap.Header>
      <ModalBootsrap.Body>
        {body}
      </ModalBootsrap.Body>
      <ModalBootsrap.Footer>
        <Button onClick={hideModal}>Close</Button>
        <Button onClick={handleOk} variant="success">Add</Button>
      </ModalBootsrap.Footer>
    </ModalBootsrap>
  )
}
