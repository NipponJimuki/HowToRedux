// reducers/textField.js
import { TEXT_CHANGE, ADD_CELE } from '../actions/actionTypes';

const initialState = {
    textValue: '',
    celes: [],
};

export const textFieldState = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TEXT_CHANGE: {
            return {
                ...state,
                textValue: payload,
            };
        }
        case ADD_CELE: {
            return {
                ...state,
                celes: [...state.celes, payload],
            };
        }
        default: {
            return state;
        }
    }
};
