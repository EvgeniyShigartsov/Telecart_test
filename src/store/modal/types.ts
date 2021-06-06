import React from 'react';

export interface IModalState {
  isOpen: boolean
  header: string
  body: React.ReactNode
}

export interface IOnOpenPayload {
  header: string
  body: React.ReactChild
}

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
}

interface IShowModalAction {
  type: ModalActionTypes.SHOW_MODAL
  payload: IOnOpenPayload
}

interface ICloseModalAction {
  type: ModalActionTypes.HIDE_MODAL
}

export type ModalAction = IShowModalAction | ICloseModalAction
