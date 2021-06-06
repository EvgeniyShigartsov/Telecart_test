import { Dispatch } from 'redux'
import { IOnOpenPayload, ModalAction, ModalActionTypes as types } from './types'

export const openModal = (payload: IOnOpenPayload) => (dispatch: Dispatch<ModalAction>): void => {
  dispatch({ type: types.SHOW_MODAL, payload })
}
export const hideModal = () => (dispatch: Dispatch<ModalAction>): void => {
  dispatch({ type: types.HIDE_MODAL })
}
