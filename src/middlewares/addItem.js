// middlewares/addItem.js
import { ADD_ITEM } from '../actions/actionTypes';

const addItem = store => next => action => {
    switch (action.type) {
        case ADD_ITEM: {
            const { items } = store.getState().textFieldState;
            const addedItems = [
                ...items,
                {
                    id: `item-index-of-${items.length}`,
                    name: action.payload,
                    power: false,
                },
            ];
            action.payload = addedItems;

            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default addItem;
