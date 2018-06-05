import { createStackNavigator, StatusBar } from 'react-navigation';

import Home from './screens/home';
import Detail from './screens/detail';
import LoginSocial from './screens/loginSocial';

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
		}
  	},
  	{
    	initialRouteName: 'LoginSocial',
	}
);