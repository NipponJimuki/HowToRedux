// containers/AddItem.js
import { connect } from 'react-redux';
import { AddItem } from '../components';
import { addItem } from '../actions';

const mapStateToProps = ({ textFieldState }) => ({
    ...textFieldState,
});

const mapDispatchToProps = dispatch => ({
    addItemAction(value) {
        dispatch(addItem(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddItem);
