// reducers/index.js
import { changePowerState } from './itemList';
import { textFieldState } from './addItem';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    changePowerState,
    textFieldState,
});

export default reducers;
