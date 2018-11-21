// reducers/index.js
import { changePowerState } from './main';
import { textFieldState } from './textField';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    changePowerState,
    textFieldState,
});

export default reducers;
