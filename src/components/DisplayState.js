// components/DisplayState.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayState extends Component {
    static defaultProps = {
        power: false,
    };

    render() {
        return <div style={{ width: '45px' }}>{this.props.power ? 'ON' : 'OFF'}</div>;
    }
}
DisplayState.propTypes = {
    power: PropTypes.bool,
};

export default DisplayState;
