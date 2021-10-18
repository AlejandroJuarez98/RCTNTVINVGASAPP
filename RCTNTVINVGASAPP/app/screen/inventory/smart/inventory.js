'use strict'

import React from 'react'
import {
	View,
	Text,
	ScrollView
} from 'react-native'
import Styles from './styles'
import InvCard from './dumb/invcard'

export default class InventoryComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
			<ScrollView style={ Styles.container }>
				<Text style={ Styles.reportlabel }>Reporte de inventario</Text>
				{
					this.props.route.params.detail.map ((object, index) => {
						object[2] = object[2].replace("<h5>", "").replace("</h5>", "")

						return <InvCard 
								index={ index }
								cbarra={object[0] }
								name={ object[1] }
								quantity={ object[2] }	/>
					})
				}
			</ScrollView>
		)
	}
}