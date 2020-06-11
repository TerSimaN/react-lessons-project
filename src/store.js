import { createStore, combineReducers } from 'redux';
import imagesReducer from './app/reducers/Images';
import albumsReducer from './app/reducers/Albums';

export default createStore(combineReducers({
    images: imagesReducer,
    albums: albumsReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
