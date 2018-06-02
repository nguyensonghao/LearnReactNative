import React from 'react';
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './src/Navigation';
import reducer from './src/reducers';
const store = createStore(reducer);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}

	async componentWillMount() {
		await Font.loadAsync({
		  	Roboto: require("native-base/Fonts/Roboto.ttf"),
		  	Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});
		this.setState({ loading: false });
	}

  	render() {
		if (this.state.loading) {
			return (
			  	<Root>
					<AppLoading />
			  	</Root>
			);
		}

    	return (
			<Provider store={store}>
				<Root>
					<AppNavigator/>
				</Root>
			</Provider>
    	);
  	}
}

export default App;