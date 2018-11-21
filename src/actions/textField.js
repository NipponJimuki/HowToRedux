// actions/textField.js
import { TEXT_CHANGE, ADD_CELE } from './actionTypes';

export const textChange = payload => ({
    type: TEXT_CHANGE,
    payload,
});

export const addCele = payload => ({
    type: ADD_CELE,
    payload,
});
