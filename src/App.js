import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(() => {});

// DOM出力
render(
    <Provider store={store}>
        <div>Hello World</div>
    </Provider>,
    document.getElementById('content')
);
