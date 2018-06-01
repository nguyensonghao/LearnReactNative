import React, { Component } from 'react';
import { Container, List} from 'native-base';
import { navigationOptions } from 'react-navigation';
import { connect } from 'react-redux';

import Loading from '../../components/loading';
import { getList } from '../../helpers/product';
import style from './style'; 
import Item from './item';
import * as actions from '../../actions/product';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }   
    }

    componentDidMount () {
        getList().then(result => {
            this.setState({
                isLoading: false
            })

            this.props.dispatch(actions.getList(result.data));
        })
    }

    viewDetail = (id) => {
        this.props.navigation.push('Detail', {
            id: id
        });
    }

    render () {
        const { isLoading } = this.state;
        const { list } = this.props;

        if (isLoading) {
            return <Loading/>
        }

        return (
            <Container>
                <List 
                    style={style.list}
                    dataArray={list}
                    renderRow={(item) =>
                        <Item product={item} viewDetail={(id) => this.viewDetail(id)}/>
                    }>
                </List>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.product.list
    }
}

export default connect(
    mapStateToProps,
)(Home)