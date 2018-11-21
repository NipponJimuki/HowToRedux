// containers/TextField.js
import { connect } from 'react-redux';
import { TextField } from '../components';
import { textChange, addCele } from '../actions';

const mapStateToProps = ({ textFieldState }) => ({
    ...textFieldState,
});

const mapDispatchToProps = dispatch => ({
    textChangeAction(value) {
        dispatch(textChange(value));
    },
    addCeleAction(value) {
        dispatch(addCele(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextField);
