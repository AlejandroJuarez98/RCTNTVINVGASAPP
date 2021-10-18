'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
	scroll: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	invheader: {
		height: 75,
		padding: 10,
		width: '100%',
		flexDirection: 'row',
		backgroundColor: '#F5FCFF'
	},
	mainimage: {
		width: 50,
		height: 50,
		marginLeft: 5,
		marginRight: 5
	},
	invrheader: {
		flex: 1
	},
	invlheader: {
		flex: 3
	},
	invnumber: {
		fontSize: 15,
		color: '#222222',
		fontFamily: 'Quicksand-Bold'
	},
	maindescription: {
		color: '#222222',
		fontFamily: 'Quicksand-Bold'
	},
	inputc: {
		color: '#222222',
		fontFamily: 'Quicksand-Regular'
	},
	codec: {
		flex: 1
	},
	formc: {
		flex: 1,
		flexDirection: 'row'
	},
	reportlabel: {
		fontSize: 12,
		color: "#222222",
		marginBottom: 10,
		marginLeft: 15,
		fontFamily: 'Montserrat-Bold'
	},
	dcard: {
		padding: 5,
		marginBottom: 5,
		flexDirection: 'row',
		backgroundColor: '#f1f2f6'
	},
	cardimage: {
		width: 50,
		height: 50,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 20
	},
	dimage: {
		flex: 1,
		margin: 5,
		width: 50,
		height: 50
	},
	dcontent: {
		flex: 3,
		padding: 10
	},
	dremove: {
		flex: 1
	},
	minus: {
		marginTop: '45%',
		color: "#ffffff",
		fontSize: 20
	},
	carditem: {
		color: '#222222',
		fontFamily: 'Quicksand-Bold'
	},
	decard: {
		flex: 1
	},
	reportc: {
		flex: 4
	},
	reportEmpty: {
		color: '#222222',
		fontFamily: 'Quicksand-Bold',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '40%'
	},
	emptyLabel: {
		marginTop: 15,
		textAlign: 'center',
		fontSize: 15,
		fontFamily: 'Quicksand-Bold',
		color: '#bdc3c7'
	}
})