'use strict'

import Styles from '../styles'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
	View,
	Text,
	Image,
	Alert,
	ScrollView
} from 'react-native'
import {
	Menu
} from 'react-native-paper'

const options = (props) => {
  	const [ visible, setVisible ] = useState (true)
 	
  	const hideMenu = () => setVisible (false)
  	const showMenu = () => setVisible (true)

  	const remove = () => {
  		props.removeItem (props.index)
  		hideMenu ()
  	}

	if (props.isProductItem) {
		return (
			<View style={ Styles.dremove }>
				<Menu
			        visible={ visible }
			        anchor={ <Icon onPress={ showMenu } name={ 'ellipsis1' } style={ Styles.minus } /> }
			        onDismiss={ hideMenu }>
			        <Menu.Item style={ Styles.menuitem } onPress={ remove } title={ 'Remover' } />
			    </Menu>
			</View>
		)
	} else {
		return null
	}
}

const InvCard = (props) => {
	return (
		<View style={ Styles.dcard }>
			<View style={ Styles.dimage }>
				<Image 
					style={ Styles.cardimage }
    				source={ require('../../../assets/img/barcode-solid.png') } />
			</View>
			<View style={ Styles.dcontent }>
				<Text style={ Styles.carditem }>#{ props.cbarra }</Text>
				<Text style={ Styles.carditem }>{ props.name }</Text>
				<Text style={ Styles.carditem }>Cantidad: { props.quantity }</Text>
			</View>
			{ options (props) }
		</View>
	)
}

export default InvCard
