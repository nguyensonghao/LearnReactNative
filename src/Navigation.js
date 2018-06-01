import { createStackNavigator, StatusBar } from 'react-navigation';

import Home from './screens/home';
import Detail from './screens/detail';

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
		}
  	},
  	{
    	initialRouteName: 'Home',
	}
);