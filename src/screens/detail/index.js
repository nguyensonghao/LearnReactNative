import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import { getDetail } from '../../helpers/product';
import { upercaseFirst, showAlert } from '../../helpers/util';
import { STATUS_SUCCESS } from '../../contansts/config';
import { CONNECT_API_FAIL } from '../../contansts/message';
import * as actions from '../../actions/product';
import Loading from '../../components/loading';
import style from './style';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.navigation.getParam('id');
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        getDetail(this.id).then(result => {
            if (result.status == STATUS_SUCCESS) {
                this.props.dispatch(actions.getProduct(result.data));
                this.setState({
                    isLoading: false
                })
            } else {
                showAlert(CONNECT_API_FAIL);
            }
        }).catch (e => {
            showAlert(CONNECT_API_FAIL);
        })
    }

    render() {
        const { isLoading } = this.state;
        const { product } = this.props;
        const win = Dimensions.get('window');

        if (isLoading || !product.title) {
            return <Loading/>
        }

        return (
            <Container style={style.container}>
                <View style={style.titleContent}>
                    <Text style={style.title}>{upercaseFirst(product.title)}</Text>
                </View>
                <Image
                    style={{width: win.width, height: win.width}}
                    source={{uri: product.url}}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product.product
    }
}

export default connect(
    mapStateToProps,
)(Detail)