import React, {
	Component
} from 'react'
import {Provider} from 'react-redux'
import store from './store/configureStore'

import {HomePage} from './pages/HomePage'

const setup = () => {
	return () => {
		return ( 
			<HomePage/>
			);
	}
}

export default setup