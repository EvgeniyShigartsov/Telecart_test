import { Dispatch } from 'redux'
import { IOnModalOpenPayload, ModalAction, ModalActionTypes as types } from './types'

// eslint-disable-next-line max-len
export const openModal = (payload: IOnModalOpenPayload) => (dispatch: Dispatch<ModalAction>): void => {
  dispatch({ type: types.SHOW_MODAL, payload })
}
export const hideModal = () => (dispatch: Dispatch<ModalAction>): void => {
  dispatch({ type: types.HIDE_MODAL })
}
