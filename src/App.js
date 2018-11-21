import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { TextField } from './containers';

const store = createStore(reducers);

// DOM出力
render(
    <Provider store={store}>
        <TextField />
    </Provider>,
    document.getElementById('content')
);
