import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { MODULE_NAME as contactsModule, reducer as contactsReducer } from './contacts/reducer'
import { MODULE_NAME as modalModule, reducer as modalReducer } from './modal/reducer'

const rootReducer = combineReducers({
  [contactsModule]: contactsReducer,
  [modalModule]: modalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
