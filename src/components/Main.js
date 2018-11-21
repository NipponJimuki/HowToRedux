// components/Main.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';

class Main extends Component {
    static defaultProps = {
        changePowerStateAction() {},
        powerState: false,
    };

    render() {
        return (
            <div>
                <TextField />
            </div>
        );
    }
}
Main.propTypes = {
    changePowerStateAction: PropTypes.func,
    powerState: PropTypes.bool,
};

export default Main;
