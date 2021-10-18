'use strict'

import React from 'react'
import {
	View,
	Text,
	Alert,
	ScrollView
} from 'react-native'
import Axios from 'axios'
import Styles from './styles'
import InvCard from './dumb/invcard'
import { Input, Button } from 'react-native-elements'

export default class ProductsComponent extends React.Component {
	constructor (props) {
		super (props)

		this.state = {
			code: "",
			quantity: 0,
			updates: []
		}
	}

	onChangeInputText (value, label) {
		if (label.includes('code')) {
			this.state.code = value
			this.setState ({ code: this.state.code })
			this.add ()
		}

		if (label.includes('quantity')) {
			this.state.quantity = value
			this.setState ({ quantity: this.state.quantity })
		}
	}

	async add () {
		if (this.state.code.length > 0 && this.state.quantity.length > 0) {
			let item = this.props.route.params.detail.findIndex ((object) => {
				return this.state.code == object[0]
			})

			if (item >= 0) {
				this.props.route.params.detail[item][2] = this.state.quantity

				this.state.updates.push([ this.state.code, this.props.route.params.detail[item][1], this.props.route.params.detail[item][2] ])
				this.setState({ updates: this.state.updates })
			} else {
				let object = [ this.state.code, "", this.state.quantity ]

				this.props.route.params.updates.push (object)
				this.state.updates.push ([ this.state.code, this.props.route.params.detail[item][1], this.props.route.params.detail[item][2] ])
				this.setState ({ updates: this.state.updates })
			}

			let request = await Axios ({
				method: 'get',
				url: `http://192.168.160.52:81/inventario/materializeDesa/php/combustible.php?accion=4&lectura=${ this.props.route.params.invnumber }&barra=${ this.state.code }&cant=${ this.state.quantity }&vuser=0`
			})

			if (request.data.msg.includes("ok")) {
				this.state.code = ""
				this.state.quantity = ""

				this.setState ({ code: this.state.code, quantity: this.state.quantity })
				Alert.alert ("Datos actualizados", "")
			}
		}
	}

	removeItem (index) {
		let result = this.state.updates.filter ((object, value) => {
			return value != index
		})

		this.state.updates = result
		this.setState ({ updates: this.state.updates })
	}

	report () {
		if (this.state.updates.length > 0) {
			return this.state.updates.map ((object, index) => {
				object[2] = object[2].replace("<h5>", "").replace("</h5>", "")

				return <InvCard 
						index={ index }
						name={ object[1] }
						cbarra={object[0] }
						removeItem={ this.removeItem.bind(this) }
						key={ `inv-card-item-${ index }` }
						quantity={ object[2] }	/>
			})
		} else {
			return (
				<View style={ Styles.container }>
					<Text style={ Styles.reportEmpty }>Sin elementos</Text>
				</View>
			)
		}
	}

	render () {
		return (
			<ScrollView style={ Styles.container }>
				<View style={ Styles.reportc }>
					<View style={ Styles.formc }>
						<View style={ Styles.codec }>
							<Input 
								label='Cantidad'
		  						keyboardType = 'numeric'
								labelStyle={ Styles.inputc }
								inputStyle={ Styles.inputc }
								value={ this.state.quantity }
								onChangeText={ (value) => { this.onChangeInputText(value, 'quantity') }}
								placeholder='Cantidad' />
						</View>
						<View style={ Styles.codec }>
							<Input 
								label='Código'
		  						keyboardType = 'numeric'
								labelStyle={ Styles.inputc }
								inputStyle={ Styles.inputc }
								value={ this.state.code }
								onChangeText={ (value) => { this.onChangeInputText(value, 'code') }}
								placeholder='Código' />
						</View>
					</View>
					<Text style={ Styles.reportlabel }>Resumen</Text>
					{ this.report() }
				</View>
			</ScrollView>
		)
	}
}