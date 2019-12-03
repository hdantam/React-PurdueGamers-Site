import {combineReducers} from 'redux'
import leagueReducer from './league/league.reducer'
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    league: leagueReducer
});