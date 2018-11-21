// middlewares/textField.js
import { ADD_ITEM } from '../actions/actionTypes';
import { textChange as textChangeActionCreator } from '../actions';

const addItem = store => next => action => {
    switch (action.type) {
        case ADD_ITEM: {
            const { items, textValue } = store.getState().textFieldState;
            if (!textValue) return false;
            const addedItems = [
                ...items,
                {
                    id: `item-index-of-${items.length}`,
                    name: textValue,
                    power: false,
                },
            ];
            action.payload = addedItems;

            store.dispatch(textChangeActionCreator(''));
            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default addItem;
