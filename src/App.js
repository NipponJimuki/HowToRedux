import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import middlewares from './middlewares';
import { ItemList, TextField } from './containers';

const store = createStore(reducers, middlewares);

// DOM出力
ReactDom.render(
    <Provider store={store}>
        <>
            <TextField />
            <ItemList />
        </>
    </Provider>,
    document.getElementById('content'),
);
