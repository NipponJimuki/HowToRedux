// containers/ItemList.js
import { connect } from 'react-redux';
import { ItemList } from '../components';
import { changePowerState } from '../actions';

const mapStateToProps = ({ textFieldState }) => ({
    items: textFieldState.items,
});

const mapDispatchToProps = dispatch => ({
    changePowerStateAction(index) {
        return () => dispatch(changePowerState(index));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ItemList);
