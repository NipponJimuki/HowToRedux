// components/AddComponent.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
    static defaultProps = {
        textChangeAction() {},
        addItemAction() {},
        textValue: '',
        items: [],
    };

    _onChange = e => this.props.textChangeAction(e.target.value);
    _onClick = () => this.props.addItemAction(this.props.textValue);

    render() {
        const { textValue, items } = this.props;
        return (
            <>
                <input type="text" onChange={this._onChange} value={textValue} />
                <button onClick={this._onClick}>追加</button>
                {items.join('/')}
            </>
        );
    }
}
TextField.propTypes = {
    textChangeAction: PropTypes.func,
    addItemAction: PropTypes.func,
    textValue: PropTypes.string,
    items: PropTypes.array,
};
export default TextField;
