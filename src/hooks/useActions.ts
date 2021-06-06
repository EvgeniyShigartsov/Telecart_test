import { useDispatch } from 'react-redux'
import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
import { combinedCreators } from '../store/combinedCreators'

// Правильно ли указан return type ? ActionCreatorsMapObject
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(combinedCreators, dispatch)
}
