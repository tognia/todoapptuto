import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestorebaseReducer } from 'redux-firestore';
import taskReducer from './taskReducer';

const rootReducer = combineReducers ({
    firbase: firebaseReducer,
    firestore: firestorebaseReducer,
    task : taskReducer,

});

export default rootReducer;