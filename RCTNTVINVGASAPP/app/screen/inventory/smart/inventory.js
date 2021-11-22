'use strict'

import React from 'react'
import {
	View,
	Text,
	ScrollView
} from 'react-native'
import Styles from '../styles'
import InvCard from '../dumb/invcard'

export default class InventoryComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
			<ScrollView style={ Styles.container }>
				<Text style={ Styles.reportlabel }>Reporte de inventario ({ this.props.route.params.detail.length })</Text>
				{
					this.props.route.params.detail.map ((object, index) => {
						return <InvCard 
								key={ `inv-card-item-${ index }` }
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