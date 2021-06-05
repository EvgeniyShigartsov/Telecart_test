import axios from 'axios';
import { Dispatch } from 'redux'
import { IContact } from '../../globalTypes/globalTypes'
import { ContactAction, ContactsActionTypes as types } from './types'

export const getContacts = () => (dispatch: Dispatch<ContactAction>): void => {
  dispatch({ type: types.GET_CONTACTS })

  axios.get<IContact[]>('./db.json')
    .then((data) => console.log(data))
    .catch((err) => console.log(err.response || err))
}
