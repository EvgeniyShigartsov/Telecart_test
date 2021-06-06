import React from 'react';

export interface IModalState {
  isOpen: boolean
  header: string
  body: React.ReactNode
}

export interface IOnModalOpenPayload {
  header: string
  body: React.ReactChild
}

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
}

interface IShowModalAction {
  type: ModalActionTypes.SHOW_MODAL
  payload: IOnModalOpenPayload
}

interface ICloseModalAction {
  type: ModalActionTypes.HIDE_MODAL
}

export type ModalAction = IShowModalAction | ICloseModalAction
