import axios from 'axios';
import { Dispatch } from 'redux'
import { IContact } from '../../globalTypes/globalTypes';
import { ContactAction, ContactsActionTypes as types, IContactsData } from './types'
import { contactsLSKey } from '../../utils/lsKeys'

const getContactsFromLS = (): IContact[] => {
  const items = localStorage.getItem(contactsLSKey)
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
      localStorage.setItem(contactsLSKey, JSON.stringify(data.contacts))
      dispatch({ type: types.GET_CONTACTS_SUCCES, payload: data.contacts })
    })
    .catch(() => {
      dispatch({ type: types.GET_CONTACTS_ERROR, payload: 'Contacts loading error.' })
    })
}

export const createContact = (contact: IContact) => (dispatch: Dispatch<ContactAction>): void => {
  const contacts = getContactsFromLS()
  const updated = [...contacts, contact]

  localStorage.setItem(contactsLSKey, JSON.stringify(updated))
  dispatch({ type: types.UPDATE_CONTACTS_LIST, payload: updated })
}

export const deleteContact = (pager: number) => (dispatch: Dispatch<ContactAction>): void => {
  const contacts = getContactsFromLS()
  const updated = contacts.filter((contact) => contact.pager !== pager)

  localStorage.setItem(contactsLSKey, JSON.stringify(updated))
  dispatch({ type: types.UPDATE_CONTACTS_LIST, payload: updated })
}

// eslint-disable-next-line max-len
export const updateContact = (pager: number, updatedContact: IContact) => (dispatch: Dispatch<ContactAction>): void => {
  const contacts = getContactsFromLS()
  const updated = contacts.map((contact) => {
    if (contact.pager === pager) {
      return updatedContact
    }
    return contact
  })

  localStorage.setItem(contactsLSKey, JSON.stringify(updated))
  dispatch({ type: types.UPDATE_CONTACTS_LIST, payload: updated })
}
