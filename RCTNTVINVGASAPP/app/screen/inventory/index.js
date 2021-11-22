'use strict'

import React from 'react'

import {
	View,
	Text,
	Image,
	ScrollView,
	ActivityIndicator
} from 'react-native'

import Axios from 'axios'
import Styles from './styles'
import InvCard from './dumb/invcard'
import InventoryTab from '../../routes/tab'
import Icon from 'react-native-vector-icons/Entypo'
import { Input, Button } from 'react-native-elements'

export default class InvComponent extends React.Component {
	constructor (props) {
		super (props)

		this.state = {
			detail: []
		}
	}

	async componentDidMount () {
		let request = await Axios ({
			method: 'get',
			url: `http://192.168.160.52:81/inventario/materialize/php/combustible.php?accion=16&lectura=${ this.props.route.params.invnumber }&vtipo=ALL&vuser=0&_=1637266109243&VIP=${ this.props.route.params.station.value.ip }`
		}).catch ((error) => {
			console.log (error)
		})

		this.state.detail = request.data.aaData

		this.setState ({
			detail: this.state.detail 
		})
	}

	rdetail () {
		if (this.state.detail.length > 0) {
			return (
				<View style={ Styles.reportc }>
					<InventoryTab screenProps={{
						detail: this.state.detail, 
						invnumber: this.props.route.params.invnumber,
						ip: this.props.route.params.station.value.ip
					}} />
				</View>
			)
		} else {
			return (
				<View style={ Styles.reportc }>
					<ActivityIndicator size="large" color="#2c3e50" style={ Styles.reportEmpty } />
				</View>
			)
		}
	}

	render () {
		return (
			<View style={ Styles.container }>
				<ScrollView contentContainerStyle={ Styles.scroll }>
					<View style={ Styles.invheader }>
						<View style={ Styles.invrheader }>
							<Image 
								style={ Styles.mainimage }
	        					source={ require ('../../assets/img/cubes-solid.png') } />
						</View>
						<View style={ Styles.invlheader }>
		        			<Text style={ Styles.invnumber }># Inventario: { this.props.route.params.invnumber }</Text>
		        			<Text style={ Styles.maindescription }>Estación: { this.props.route.params.station.value.station }</Text>
						</View>
					</View>
					{ this.rdetail () }
				</ScrollView>
			</View>
		)
	}
}