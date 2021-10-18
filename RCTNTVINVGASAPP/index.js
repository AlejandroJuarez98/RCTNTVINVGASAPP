'use strict'

import App from './app/app'
import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'

import 'react-native-gesture-handler'

LogBox.ignoreAllLogs()
AppRegistry.registerComponent(appName, () => App)