import { useDispatch } from 'react-redux'
import { bindActionCreators, ActionCreatorsMapObject } from 'redux'
import { combinedCreators } from '../store/combinedCreators'

// Правильно ли указан return type ? почему - то когда он есть пропадает автокомплит, но ошибок нет.
export const useActions = (): ActionCreatorsMapObject => {
  const dispatch = useDispatch()
  return bindActionCreators(combinedCreators, dispatch)
}
