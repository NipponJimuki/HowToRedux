// reducers/addItem.js
import { ADD_ITEM } from '../actions/actionTypes';

const initialState = {
    items: [],
};

export const textFieldState = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
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
