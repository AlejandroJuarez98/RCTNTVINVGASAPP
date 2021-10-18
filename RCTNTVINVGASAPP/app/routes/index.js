'use strict'

import React from 'react'
import Screen from '../screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AppRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen 
					name="Home"
					options={{ headerShown: false }}
					component={ Screen.HomeComponent } />
				<Stack.Screen
					name="Inventory"
					options={{ 
						headerShown: true,
						headerTitle: 'Tomar datos',
						headerStyle: {
							backgroundColor: '#2c3e50'
						},
						headerTitleStyle: {
							fontSize: 15,
							fontFamily: 'Quicksand-Bold'
						},
						headerTintColor: '#ffffff'
					}}
					component={ Screen.InventoryComponent } />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppRouter