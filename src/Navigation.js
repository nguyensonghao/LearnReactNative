import { createStackNavigator, StatusBar } from 'react-navigation';

import Home from './screens/home';
import Detail from './screens/detail';
import LoginSocial from './screens/loginSocial';
import Camera from './screens/camera';
import Map from './screens/map';

export default RootStack = createStackNavigator(
  	{
    	Home: {
			screen: Home,
			navigationOptions: ({ navigation }) => ({
				title: 'List Product',
				headerStyle: {
					backgroundColor: '#1E88E5'
				},
				tintColor: 'white'
			}),
		},
    	Detail: {
			screen: Detail,
			navigationOptions: ({ navigation }) => ({
				title: 'Detail',
				headerStyle: {
					backgroundColor: '#1E88E5'
				}
			}),
		},
		LoginSocial: {
			screen: LoginSocial,
			navigationOptions: ({ navigation }) => ({
				title: 'Login Social',
				headerStyle: {
					backgroundColor: '#1E88E5'
				}
			}),
		},
		Camera: {
			screen: Camera,
			navigationOptions: ({ navigation }) => ({
				title: 'Camera',
				headerStyle: {
					backgroundColor: '#1E88E5'
				}
			}),
        },
        Map: {
            screen: Map,
            navigationOptions: ({ navigation }) => ({
                title: 'Map',
                headerStyle: {
                    backgroundColor: '#1E88E5'
                }
            }),
        }
  	},
  	{
        initialRouteName: 'Map'
	}
);