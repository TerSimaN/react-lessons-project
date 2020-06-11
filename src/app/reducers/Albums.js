import ActionsNames from '../constants/ActionsNames';

function albumsReducer(state = [], action) {
    switch (action.type) {
        case ActionsNames.SET_ALBUMS:
            return action.albums;
        case ActionsNames.DELETE_ALBUM:
            return state.filter((album) => {
                return album.id !== action.albumId;
            });
        case ActionsNames.ADD_ALBUM:
            return [
                ...state,
                action.album
            ];
        default:
            return state;
    }
}

export default albumsReducer;
