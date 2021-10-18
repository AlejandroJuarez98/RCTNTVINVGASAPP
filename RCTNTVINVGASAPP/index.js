'use strict'

import React from 'react'
import App from './app/app'
import { name as appName } from './app.json'
import { AppRegistry, LogBox } from 'react-native'
import { Provider } from 'react-native-paper'

import 'react-native-gesture-handler'
LogBox.ignoreAllLogs()

export default function Main () {
	return (
		<Provider>
			<App />
		</Provider>
	)
}


AppRegistry.registerComponent(appName, () => Main)
