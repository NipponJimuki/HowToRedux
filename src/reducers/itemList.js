// reducers/itemList.js
import { CHANGE_POWER_STATE } from '../actions/actionTypes';

const initialState = {
    powerState: false,
};

export const changePowerState = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case CHANGE_POWER_STATE:
            return {
                ...state,
                powerState: !state.powerState,
            };
        default:
            return state;
    }
};
