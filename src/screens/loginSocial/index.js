import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions/user';

import style from './style';
import Profile from './profile';
import * as authHelper from '../../helpers/auth';
import { showAlert } from '../../helpers/util';
import { ERROR_LOGIN_FACEBOOK, ERROR_LOGIN_GOOGLE } from '../../contansts/message';

class LoginSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfile: false
        }   
    }

    loginFacebook = async () => {
        let user = await authHelper.loginFacebook();
        if (user) {
            this.props.dispatch(actions.getInformation(user));
            this.setState({
                showProfile: true
            })
        } else {
            showAlert(ERROR_LOGIN_FACEBOOK);
        }
    }

    loginGoogle = async () => {
        let user = await authHelper.loginGoogle();
        if (user) {
            this.props.dispatch(actions.getInformation(user));
            this.setState({
                showProfile: true
            })
        } else {
            showAlert(ERROR_LOGIN_GOOGLE);
        }
    }

    closeProfile = () => {
        this.setState({
            showProfile: false
        })
    }

    render() {
        const { showProfile } = this.state;
        const { user } = this.props;

        return (
            <Container style={style.content}>
                <View style={style.listButton}>
                    <Button primary style={style.butonLoginFacebook} onPress={() => this.loginFacebook()}>
                        <Text>Login Facebook</Text>
                    </Button>
                    <Button danger onPress={() => this.loginGoogle()}>
                        <Text>Login Google</Text>
                    </Button>
                </View>
                <Profile user={user} show={showProfile} close={() => this.closeProfile()}/>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(
    mapStateToProps,
)(LoginSocial)