// components/Switch.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
    static defaultProps = {
        onClick() {},
    };

    render() {
        return <button onClick={this.props.onClick}>スイッチ</button>;
    }
}
Switch.propTypes = {
    onClick: PropTypes.func,
};

export default Switch;
