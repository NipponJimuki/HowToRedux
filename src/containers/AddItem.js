// containers/AddItem.js
import { connect } from 'react-redux';
import { AddItem } from '../components';
import { textChange, addItem } from '../actions';

const mapStateToProps = ({ textFieldState }) => ({
    ...textFieldState,
});

const mapDispatchToProps = dispatch => ({
    textChangeAction(value) {
        dispatch(textChange(value));
    },
    addItemAction(value) {
        dispatch(addItem(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddItem);
