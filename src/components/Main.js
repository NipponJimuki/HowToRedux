// components/Main.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import DisplayState from './DisplayState';

class Main extends Component {
    static defaultProps = {
        changePowerStateAction() {},
        powerState: false,
    };

    render() {
        const { changePowerStateAction, powerState } = this.props;
        return (
            <div>
                <Switch onClick={changePowerStateAction} />
                <DisplayState power={powerState} />
            </div>
        );
    }
}
Main.propTypes = {
    changePowerStateAction: PropTypes.func,
    powerState: PropTypes.bool,
};

export default Main;
