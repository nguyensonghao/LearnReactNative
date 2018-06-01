import React, { Component } from 'react';
import { ListItem, Thumbnail, Body, Text } from 'native-base';

import { upercaseFirst } from '../../../helpers/util';
import style from './style';

class Item extends Component {
    render() {
        const { product } = this.props;

        return (
            <ListItem button={true} onPress={() => this.props.viewDetail(product.id)}>
                <Thumbnail square size={80} source={{ uri: product.thumbnailUrl }} />
                <Body>
                    <Text style={style.title}>{upercaseFirst(product.title)}</Text>
                </Body>
            </ListItem>
        );
    }
}

export default Item;

Item.defaultProps = {
    product: {}
};