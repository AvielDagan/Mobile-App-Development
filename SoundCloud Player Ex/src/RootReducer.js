import { combineReducers } from 'redux';
import PlayerReducer from './comp/PlayerReducer';

export default combineReducers({
    player: PlayerReducer
});
