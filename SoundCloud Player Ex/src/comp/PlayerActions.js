import { TRACKS_LOAD } from './PlayerActionTypes';
const CLIENT_ID = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q';

export const loadData = (searchQuery) => async (dispatch) => {
    const url = `https://api.soundcloud.com/tracks/?client_id=${CLIENT_ID}=${searchQuery}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: TRACKS_LOAD, tracks: json, searchQuery });
        })
        .catch((error) => {
            console.error(error);
        });
};
