import { combineReducers } from 'redux';
import teamReducer from './team-reducers';
import rankingsReducer from './rankings-reducers';
import recruitingReducer from './recruiting-reducers';

export default combineReducers({
    teamReducer,
    rankingsReducer,
    recruitingReducer
})