'use strict'

import React from 'react'

import {
	View,
	Text,
	Image,
	Picker,
	Alert,
	ScrollView
} from 'react-native'
import Axios from 'axios'
import Styles from './styles'
import Config from '../../config.json'
import { Input, Button } from 'react-native-elements'

export default class HomeComponent extends React.Component {
	constructor (props) {
		super (props)

		this.state = {
			items: [],
			station: {},
			error: false,
			invnumber: null,
		}
	}

	async componentDidMount () {
		const response = await Axios ({
			method: 'get',
			url: `http://192.168.160.52:81/inventario/materializeDesa/php/combustible.php?accion=16`
		})

		this.state.items = response.data.aaData
		this.setState({ items: this.state.items })
	}

	loadData () {
		if (this.state.station.value != -1 && this.state.invnumber != null) {
			this.state.error = false
			this.setState ({ error: this.state.error })

			this.props.navigation.navigate ('Inventory', {
				station: this.state.station,
				invnumber: this.state.invnumber
			})
		} else {
			this.state.error = true
			this.setState ({ error: this.state.error })
		}
	}

	onChangeInputText (value) {
		this.state.invnumber = value
		this.setState ({ invnumber: this.state.invnumber })
	}

	onChangeSelectedValue (value, index) {
		this.state.station = {
			index: index,
			value: {
				station: value.split("-")[0],
				ip: value.split("-")[1]
			}
		}

		this.setState ({ station: this.state.station })
	}

	handleError () {
		if (this.state.error) {
			return (
				<View style={ Styles.emessage }>
					<Text style={ Styles.elabel }>Datos incompletos</Text>
				</View>
			)
		} else {
			return null
		}
	}

	render () {
		return (
			<ScrollView contentContainerStyle={ Styles.scroll }>
				<View style={ Styles.container }>
					<View style={ Styles.mainbanner }>
						<Image 
							style={ Styles.mainimage }
	        				source={ require('../../assets/img/cubes-solid.png') } />

	        			<Text style={ Styles.maintitle }>Toma de inventario</Text>
	        			<Text style={ Styles.maindescription }>Sistema de información y control de gasolineras</Text>
					</View>
					<View style={ Styles.mainform }>
						<Picker 
							mode='dialog'
							style={ Styles.stationpicker }
	        				onValueChange={ this.onChangeSelectedValue.bind(this) }>
	        				<Picker.Item key={ `station-dialog-item-${ -1 }` } label={ 'Seleccione estación...' } value={ -1 } color={ '#222222' } />
	        				{
	        					this.state.items.map((object, index) => {
	        						return <Picker.Item key={ `station-dialog-item-${ index }` } label={ object[0] } value={ `${object[0]} - ${object[1]}` } color={ '#222222' } />
	        					})
	        				}
	        			</Picker>
						<Input 
							label='N° de inventario'
	  						keyboardType='numeric'
							labelStyle={ Styles.invnumber }
							inputStyle={ Styles.invnumber }
							value={ this.state.invnumber }
							onChangeText={ this.onChangeInputText.bind(this) }
							placeholder='Número de inventario' />
						<View style={ Styles.invbutton }>
							<Button 
								onPress={ this.loadData.bind(this) }
								titleStyle={ Styles.btntload }
								buttonStyle={ Styles.btnload }
								type='outline'
								title='Cargar información' />
						</View>
						{ this.handleError() }
					</View>
				</View>
			</ScrollView>
		)
	}
}