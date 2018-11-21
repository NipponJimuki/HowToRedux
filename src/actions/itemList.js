// actions/itemList.js
import { CHANGE_POWER_STATE } from './actionTypes';

export const changePowerState = payload => ({
    type: CHANGE_POWER_STATE,
    payload,
});
