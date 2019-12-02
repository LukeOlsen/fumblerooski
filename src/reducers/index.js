import { combineReducers } from 'redux';
import teamReducer from './team-reducers'
import rankingsReducer from './rankings-reducers'

export default combineReducers({
    teamReducer,
    rankingsReducer
})