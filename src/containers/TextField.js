// containers/TextField.js
import { connect } from 'react-redux';
import { TextField } from '../components';
import { textChange, addItem } from '../actions';

const mapStateToProps = ({ textFieldState }) => ({
    ...textFieldState,
});

const mapDispatchToProps = dispatch => ({
    textChangeAction(value) {
        dispatch(textChange(value));
    },
    addItemAction() {
        dispatch(addItem());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TextField);
