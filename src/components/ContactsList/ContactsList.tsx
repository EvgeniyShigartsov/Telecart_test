import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { contactsSelector } from '../../store/contacts/reducer'

export const ContactsList: FC = () => {
  const contacts = useTypedSelector(contactsSelector)

  return <h3>List</h3>
}
