// middlewares/index.js
import { applyMiddleware } from 'redux';
import changePowerState from './itemList';
import addItem from './textField';

const middlewares = applyMiddleware(addItem, changePowerState);

export default middlewares;
