import ActionsNames from '../constants/ActionsNames';

function imagesReducer(state = [], action) {
    switch (action.type) {
        case ActionsNames.DELETE_ALBUM:
            return state.filter((image) => {
                return image.albumId !== action.albumId;
            });
        case ActionsNames.ADD_IMAGE:
            return [
                action.image,
                ...state
            ];
        case ActionsNames.SET_IMAGES:
            return action.images;
        case ActionsNames.DELETE_IMAGE:
            return state.filter((image) => {
               return image.id !== action.imageId;
            });
        default:
            return state;
    }
}

export default imagesReducer;
