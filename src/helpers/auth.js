import Expo from 'expo';

import { ANDROID_CLIENT_ID, APP_ID } from '../contansts/config';

export const loginFacebook = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
        permissions: ['public_profile'],
    });

    if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        return {
            username: (await response.json()).name
        };
    } else {
        return null;
    }
}

export const loginGoogle = async () => {
    try {
        const result = await Expo.Google.logInAsync({
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            return {
                username: result.user.name
            }
        } else {
            return null;
        }
    } catch(e) {
        return null;
    }
}