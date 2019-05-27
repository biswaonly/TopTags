import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHashtag } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div>
					<h1 className="inline">Top Tags</h1>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));