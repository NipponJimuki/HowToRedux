// actions/textField.js
import { TEXT_CHANGE, ADD_ITEM } from './actionTypes';

export const textChange = payload => ({
    type: TEXT_CHANGE,
    payload,
});

export const addItem = payload => ({
    type: ADD_ITEM,
    payload,
});
