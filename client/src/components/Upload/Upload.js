import React, { Component } from 'react';
import './upload.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import DropImg from './DropImg';

class Upload extends Component {
	render() {
		return (
			<div className="upload">
				{/* <DropImg /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Upload));