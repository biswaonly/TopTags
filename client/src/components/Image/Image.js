import React, { Component } from 'react';
import './image.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Image extends Component {
	render() {
		return (
			<div className="image">
				<h1>Image</h1>
				<div></div>
				<button>Confirm</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Image));