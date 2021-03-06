import { IContact } from '../../globalTypes/globalTypes'

export interface IContactsState {
  contacts: IContact[]
  isLoading: boolean
  error: string
}
export enum ContactsActionTypes {
  GET_CONTACTS = 'GET_CONTACTS',
  GET_CONTACTS_SUCCES = 'GET_CONTACTS_SUCCES',
  GET_CONTACTS_ERROR = 'GET_CONTACTS_ERROR',
  UPDATE_CONTACTS_LIST = 'UPDATE_CONTACTS'
}

interface IGetContactsAction {
  type: ContactsActionTypes.GET_CONTACTS
}
interface IGetContactsSuccesAction{
  type: ContactsActionTypes.GET_CONTACTS_SUCCES,
  payload: IContact[]
}
interface IGetContactsErrorAction {
  type: ContactsActionTypes.GET_CONTACTS_ERROR,
  payload: string
}
interface IUpdateContactsListAction {
  type: ContactsActionTypes.UPDATE_CONTACTS_LIST,
  payload: IContact[]
}

export interface IContactsData {
  contacts: IContact[]
}

export type ContactAction =
  IGetContactsAction
  | IGetContactsSuccesAction
  | IGetContactsErrorAction
  | IUpdateContactsListAction
