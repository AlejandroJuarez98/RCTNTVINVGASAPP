'use strict'

import React from 'react'
import Styles from './styles'
import {
	View,
	Text,
	Image,
	Alert,
	ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const InvCard = (props) => {
	return (
		<View style={ Styles.dcard }>
			<View style={ Styles.dimage }>
				<Image 
					style={ Styles.cardimage }
    				source={ require('../../assets/img/barcode-solid.png') } />
			</View>
			<View style={ Styles.dcontent }>
				<Text style={ Styles.carditem }>#{ props.cbarra }</Text>
				<Text style={ Styles.carditem }>{ props.name }</Text>
				<Text style={ Styles.carditem }>Cantidad: { props.quantity }</Text>
			</View>
			<View style={ Styles.dremove }>
				<Icon 
					onPress={ () => props.removeItem (props.index) }
					name={ 'minus' }
					style={ Styles.minus } />
			</View>
		</View>
	)
}

export default InvCard