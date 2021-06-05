import { IContactsState, ContactAction, ContactsActionTypes as types } from './types'

const initialState: IContactsState = {
  contacts: [],
  isLoading: false,
  error: '',
}

export const MODULE_NAME = 'contacts'

export const reducer = (state = initialState, action: ContactAction): IContactsState => {
  switch (action.type) {
    case types.GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_CONTACTS_SUCCES:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      }
    case types.GET_CONTACTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
