// middlewares/itemList.js
import { CHANGE_POWER_STATE } from '../actions/actionTypes';
import { addItem } from '../actions';

const changePowerState = store => next => action => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_POWER_STATE: {
            const { items } = store.getState().textFieldState;
            const changedPowerItems = items.map((key, index) =>
                index === payload ? { ...key, power: !key.power } : key,
            );
            console.log(changedPowerItems);
            next(addItem(changedPowerItems));
            break;
        }
        default:
            next(action);
    }
};

export default changePowerState;
