import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { View, Image, PermissionsAndroid  } from 'react-native';

import style from './style';
import { showAlert } from '../../helpers/util';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }   
    }

    captureImage = async () => {
        const { cancelled, uri } = await Expo.ImagePicker.launchCameraAsync({});
        if (!cancelled) {
            showAlert("Capture image successfully!");
            this.setState({
                image: uri
            })
        }
    }

    chooseImage = async () => {
        const { cancelled, uri } = await Expo.ImagePicker.launchImageLibraryAsync();
        if (!cancelled) {
            showAlert("Choose image successfully!");
            this.setState({
                image: uri
            })
        }
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, {
                    'title': 'Cool Photo App Camera Permission',
                    'message': 'Cool Photo App needs access to your camera so you can take awesome pictures.'
                }
            )

            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            return false;
        }
    }

    renderImage = () => {
        const { image } = this.state;
        return image ? <Image 
            style={style.image}
            source={{uri: image}}
        /> : null;
    }

    render() {
        return (
            <Container style={style.content}>
                <View style={style.listButton}>
                    <Button primary style={style.button} onPress={() => this.chooseImage()}>
                        <Text>Choose Image From Lirary</Text>
                    </Button>
                    <Button primary style={style.button} onPress={() => this.captureImage()}>
                        <Text>Capture Image</Text>
                    </Button>
                </View>
                <View>
                    {this.renderImage()}
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
)(Camera)