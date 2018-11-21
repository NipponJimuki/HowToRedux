import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// 追加
import { changePowerState } from './reducers';
import { Main } from './containers';

// 追加
const store = createStore(changePowerState);

// DOM出力
// 変更
render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('content')
);
