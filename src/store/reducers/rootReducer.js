import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quoteReducer from './quoteReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    quote: quoteReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})
export default rootReducer;