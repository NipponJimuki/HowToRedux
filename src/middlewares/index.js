// middlewares/index.js
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import changePowerState from './itemList';
import addItem from './addItem';

const logger = [];
if (process.env.NODE_ENV === 'development') {
    logger.push(createLogger());
}

const middlewares = applyMiddleware(addItem, changePowerState, ...logger);

export default middlewares;
