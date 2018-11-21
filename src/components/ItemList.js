// components/ItemList.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Switch from './Switch';
import DisplayState from './DisplayState';

class ItemList extends Component {
    static defaultProps = {
        changePowerStateAction() {},
        items: [],
    };

    render() {
        const { items, changePowerStateAction } = this.props;
        return (
            <div>
                {items.map((item, index) => (
                    <List key={item.id}>
                        <Item>{item.name}</Item>
                        <DisplayState power={item.power} />
                        <Switch onClick={changePowerStateAction(index)} />
                    </List>
                ))}
            </div>
        );
    }
}
ItemList.propTypes = {
    changePowerStateAction: PropTypes.func,
    items: PropTypes.array,
};

const List = styled.div`
    width: 100%;
    display: flex;
    color: rgb(100, 100, 100);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(100, 100, 100);
`;
const Item = styled.div`
    font-size: 3rem;
    width: 30%;
`;

export default ItemList;
