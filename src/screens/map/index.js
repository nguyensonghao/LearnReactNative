import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { MapView, Constants, Location, Permissions } from 'expo';
import { Platform } from 'react-native';

import { HA_NOI_LOCATION } from '../../contansts/config';
import { getCurrentLocation } from '../../helpers/location';
import { showAlert } from '../../helpers/util';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRegion: HA_NOI_LOCATION,
            marker: {
                title: 'Your location notifycation',
                description: 'Drag to change position',
                latlng: {
                    latitude: 21.028511,
                    longitude: 105.804817
                }
            },
            circle: {
                center: {
                    latitude: 21.028511,
                    longitude: 105.804817
                },
                fillColor: "#d8040442",
                strokeColor: "#d80404",
                radius: 500
            }
        }
    }

    componentDidMount = async () => {
        let location = await getCurrentLocation();
        if (location.status) {
            this.setState({
                location: {
                    title: 'Your location notifycation',
                    description: 'Drag to change position',
                    latlng: {
                        latitude: location.data.coords.latitude,
                        longitude: location.data.coords.longitude
                    }
                }
            });
        } else {
            showAlert(location.message);
        }
    }

    clickMapView = (coordinate, point) => {
        console.log(coordinate);
    }

    renderCurrentLocation = () => {
        const { location } = this.state;
        return location ? <MapView.Marker
            coordinate={location.latlng}
            title={location.title}
            pinColor={'#28a745'}
            description={location.description}
        /> : null;
    }

    render() {
        const { initialRegion, marker, circle, location } = this.state;

        return (
            <Container>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={initialRegion}
                    onPress={(coordinate, point) => this.clickMapView(coordinate, point)}
                >
                    <MapView.Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                    <MapView.Circle 
                        center={marker.latlng}
                        strokeColor={circle.strokeColor}
                        fillColor={circle.fillColor}
                        radius={circle.radius}
                    />
                    
                    {location ? <MapView.Marker
                        coordinate={location.latlng}
                        title={location.title}
                        pinColor={'#28a745'}
                        description={location.description}
                    /> : null}
                </MapView>
            </Container>
        )
    }
}
