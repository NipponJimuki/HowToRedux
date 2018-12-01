// components/AddItem.js
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const AddItem = ({ addItemAction }) => (
    <Formik
        initialValues={{ item: '' }}
        validationSchema={Yup.object().shape({
            item: Yup.string().required('入力必須です'),
        })}
        onSubmit={(values, { resetForm }) => {
            addItemAction(values.item);
            resetForm();
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={values.item}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.item && touched.item && <span>{errors.item}</span>}
                <button type="submit">追加</button>
            </form>
        )}
    />
);

AddItem.propTypes = {
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

export default AddItem;
