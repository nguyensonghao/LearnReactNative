import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style';

class Profile extends Component {
    render() {
        const { show, user } = this.props;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={show}
                onRequestClose={() => {
                    console.log("Close modal");
                }}>
                    <View style={style.content}>
                        <Text>ĐĂNG NHẬP THÀNH CÔNG!</Text>
                        <Text>THÔNG TIN ĐĂNG NHẬP NGƯỜI DÙNG</Text>
                        <Text>Tên: {user.username}</Text>
                        <Button primary onPress={() => this.props.close()}>
                            <Text>Đóng</Text>
                        </Button>
                    </View>    
            </Modal>
        );
    }
}

export default Profile;