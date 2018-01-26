// import React, {
// 	Component
// } from 'react'
// import {Provider, connect} from 'react-redux'
// import store from './store/configureStore'

// import HomePage from './pages/HomePage'

// import RootNavigation from './navigation/RootNavigation'

// const App = connect()(HomePage);

// const setup = () => {
// 	return () => {
// 		return ( 
// 			<Provider store={store}>
// 				<App/>
// 			</Provider>
// 			);
// 	}
// }

// export default setup;

import React, {
	Component
} from 'react'

import Home from './pages/Home'

// const setup = () => {
// 	return () => {
// 		return ( 
// 				<Home/>
// 			);
// 	}
// }

const setup = Home;

export default setup;