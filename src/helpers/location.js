import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export const getCurrentLocation = async () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
        return {
            status: false,
            message: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
        }
    }

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        return {
            status: false,
            message: 'Permission to access location was denied'
        }
    }

    return {
        status: true,
        data: await Location.getCurrentPositionAsync({})
    }
}