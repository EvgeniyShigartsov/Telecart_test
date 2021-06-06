// import { RootState } from '../index'
import { IModalState, ModalAction, ModalActionTypes as types } from './types'

const initialState: IModalState = {
  isOpen: false,
  header: '',
  body: null,
  onOkCallback: null,

}

export const MODULE_NAME = 'modal'

export const reducer = (state = initialState, action:ModalAction): IModalState => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        header: action.payload.header,
        body: action.payload.body,
        onOkCallback: action.payload.onOkCallback,
      }
    case types.HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        header: '',
        body: null,
        onOkCallback: null,
      }
    default:
      return state
  }
}
