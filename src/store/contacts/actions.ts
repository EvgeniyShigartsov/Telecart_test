import axios from 'axios';
import { Dispatch } from 'redux'
import { IContact } from '../../globalTypes/globalTypes';
import { ContactAction, ContactsActionTypes as types, IContactsData } from './types'

const getContactsFromLS = (): IContact[] => {
  const items = localStorage.getItem('contacts')
  if (!items) return []
  return JSON.parse(items)
}

export const getContacts = () => (dispatch: Dispatch<ContactAction>): void => {
  const contacts = getContactsFromLS()
  if (contacts.length) {
    dispatch({ type: types.GET_CONTACTS_SUCCES, payload: contacts })
    return
  }

  dispatch({ type: types.GET_CONTACTS })

  axios.get<IContactsData>('./db.json')
    .then(({ data }) => {
      localStorage.setItem('contacts', JSON.stringify(data.contacts))
      dispatch({ type: types.GET_CONTACTS_SUCCES, payload: data.contacts })
    })
    .catch(() => {
      dispatch({ type: types.GET_CONTACTS_ERROR, payload: 'Contacts loading error.' })
    })
}
