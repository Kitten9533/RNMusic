import React, {
	Component
} from 'react'
import {Provider, connect} from 'react-redux'
import store from './store/configureStore'

import HomePage from './pages/HomePage'

const App = connect()(HomePage);

const setup = () => {
	return () => {
		return ( 
			<Provider store={store}>
				<App/>
			</Provider>
			);
	}
}

export default setup;