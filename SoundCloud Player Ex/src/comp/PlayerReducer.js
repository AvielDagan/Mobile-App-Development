import { TRACKS_LOAD, PLAY_TRACK } from './PlayerActionTypes';

const initialState = {
    tracks: [],
    recentQueries: [],
    isLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TRACKS_LOAD:
            return {
                ...state,
                tracks: action.tracks,
                recentQueries: state.recentQueries.concat(action.searchQuery)
            };

        case PLAY_TRACK:
            return {
                ...state
            };
        default:
            return state;
    }
};
