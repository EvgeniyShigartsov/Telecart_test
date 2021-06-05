import React, { FC } from 'react'
import { useActions } from '../../hooks/useActions'

export const ContactsList: FC = () => {
  const { getContacts } = useActions()
  return <h3>List</h3>
}
