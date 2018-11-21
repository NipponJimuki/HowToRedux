// middlewares/index.js
import { applyMiddleware } from 'redux';
import changePowerState from './itemList';
import addCele from './textField';

const middlewares = applyMiddleware(addCele, changePowerState);

export default middlewares;
