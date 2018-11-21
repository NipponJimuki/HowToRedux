// components/AddItem.js
import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

class AddItem extends Component {
    static defaultProps = {
        textChangeAction() {},
        addItemAction() {},
        textValue: '',
    };

    render() {
        const { handleSubmit, handleChange, handleBlur, errors, values } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.item}
                />
                {errors.item && <span>{errors.item}</span>}
                <button type="submit">追加</button>
            </form>
        );
    }
}
TextField.propTypes = {
    textChangeAction: PropTypes.func,
    addItemAction: PropTypes.func,
    textValue: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    errors: PropTypes.shape({
        item: PropTypes.string,
    }),
    values: PropTypes.shape({
        item: PropTypes.string,
    }),
};
export default withFormik({
    mapPropsToValues: () => ({
        item: '',
    }),
    validationSchema: () =>
        Yup.object().shape({
            item: Yup.string().required('入力必須です'),
        }),
    handleSubmit: (values, { props, resetForm }) => {
        const { items, addItemAction } = props;
        const addedItems = [
            ...items,
            {
                id: `item-index-of-${items.length}`,
                name: values.item,
                power: false,
            },
        ];
        addItemAction(addedItems);
        resetForm();
    },
    displayName: 'itemForm',
})(AddItem);
