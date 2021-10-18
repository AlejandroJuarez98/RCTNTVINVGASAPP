'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
	scroll: {
		flex: 1
	},
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#F5FCFF'
	},
	mainbanner: {
		flex: 3,
		padding: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainimage: {
		width: 100,
		height: 100,
		marginBottom: 5
	},
	maintitle: {
		fontSize: 20,
		marginBottom: 3,
		color: '#222222',
		fontFamily: 'Quicksand-Bold'
	},
	maindescription: {
		fontSize: 12,
		color: '#222222',
		fontFamily: 'Montserrat-Bold'
	},
	mainform: {
		flex: 3,
		padding: 3
	},
	stationpicker: {
		padding: 10,
		marginBottom: 15,
		fontFamily: 'Quicksand-Bold',
		color: '#222222'
	},
	invnumber: {
		color: '#222222',
		fontFamily: 'Quicksand-Regular'
	},
	invbutton: { 
		padding: 10,
		marginTop: 5,
		paddingLeft: 10, 
		paddingRight: 10
	},
	btnload: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#ffffff',
		backgroundColor: '#2c3e50'
	},
	btntload: {
		color: '#ffffff'
	},
	emessage: {
		padding: 5
	},
	elabel: {
		fontSize: 12,
		marginTop: 15,
		color: '#e74c3c',
		textAlign: 'center',
		fontFamily: 'Quicksand-Bold'
	}
})