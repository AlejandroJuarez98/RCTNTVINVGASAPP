'use strict'

import React from 'react'
import {
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native'
import InventoryComponent from '../screen/inventory/smart/inventory'
import ProductsComponent from '../screen/inventory/smart/products'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator ()

const InventoryTab = (props) => {
	return (
		<Tab.Navigator
			activeColor="#222222"
			inactiveColor="#2c3e50"
			initialRouteName="Productos"
			barStyle={{ backgroundColor: '#ecf0f1' }} >
			<Tab.Screen
				name="Productos"
				component={ ProductsComponent } 
				initialParams={{ detail: props.screenProps.detail, invnumber: props.screenProps.invnumber, ip: props.screenProps.ip }}
				options={{
					tabBarIcon: ({ color, size }) => (
			            <Icon name="check" color={color} size={size} />
			        )
				}} />
			<Tab.Screen
				name="Inventario"
				component={ InventoryComponent }
				initialParams={{ detail: props.screenProps.detail }}
				options={{
					tabBarIcon: ({ color, size }) => (
			            <Icon name="database" color={color} size={size} />
			        )
				}} />
		</Tab.Navigator>
	)
}

export default InventoryTab