import { LIVE_GAMES, LOADING_LIVESCORE } from '../actions/actionsType';
const initialState = {
  leagues: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LIVESCORE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LIVE_GAMES: {
      if (action.leagues[0] === undefined) {
        return {
          ...state,
          isLoading: false
        };
      }
      return {
        ...state,
        leagues: [...state.leagues, action.leagues[0]],
        isLoading: false
      };
    }
    default:
      return state;
  }
};
