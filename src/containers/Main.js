// containers/Main.js
import { connect } from 'react-redux';
import { Main } from '../components';
import { changePowerState } from '../actions';

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    changePowerStateAction() {
        dispatch(changePowerState());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
