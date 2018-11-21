// components/TextField.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
    static defaultProps = {
        textChangeAction() {},
        addItemAction() {},
        textValue: '',
    };

    _onChange = e => this.props.textChangeAction(e.target.value);
    _onClick = () => this.props.addItemAction();

    render() {
        return (
            <>
                <input type="text" onChange={this._onChange} value={this.props.textValue} />
                <button onClick={this._onClick}>追加</button>
            </>
        );
    }
}
TextField.propTypes = {
    textChangeAction: PropTypes.func,
    addItemAction: PropTypes.func,
    textValue: PropTypes.string,
};
export default TextField;
