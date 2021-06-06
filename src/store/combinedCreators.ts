import * as ContactsActionCreators from './contacts/actions'
import * as ModalActionCreators from './modal/actions'

export const combinedCreators = {
  ...ContactsActionCreators,
  ...ModalActionCreators,
}
