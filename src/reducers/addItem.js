// reducers/addItem.js
import { TEXT_CHANGE, ADD_ITEM } from '../actions/actionTypes';

const initialState = {
    textValue: '',
    items: [],
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
        case ADD_ITEM: {
            return {
                ...state,
                items: payload,
            };
        }
        default: {
            return state;
        }
    }
};
