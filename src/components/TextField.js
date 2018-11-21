// components/AddComponent.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
    static defaultProps = {
        textChangeAction() {},
        addCeleAction() {},
        textValue: '',
        celes: [],
    };

    _onChange = e => this.props.textChangeAction(e.target.value);
    _onClick = () => this.props.addCeleAction(this.props.textValue);

    render() {
        const { textValue, celes } = this.props;
        return (
            <>
                <input type="text" onChange={this._onChange} value={textValue} />
                <button onClick={this._onClick}>追加</button>
                {celes.join('/')}
            </>
        );
    }
}
TextField.propTypes = {
    textChangeAction: PropTypes.func,
    addCeleAction: PropTypes.func,
    textValue: PropTypes.string,
    celes: PropTypes.array,
};
export default TextField;
