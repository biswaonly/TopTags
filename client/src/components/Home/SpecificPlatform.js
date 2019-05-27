import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SpecificPlatform extends Component {
	selectPlatform=(p)=>{
		this.props.addToState({platform:p})
	}
	render() {
		console.log(this.props.platform);
		
		return (
			<div className="specific_platform" onClick={()=> this.selectPlatform(this.props.local_platform)}>
				<button className="button">
					<div className="next_btn flex">
						<div className="icon_fa" />
						<img className="icon_img" src={require(`../../data/${this.props.local_platform}.png`)} alt="aijsoa" ></img> 
						<p>{this.props.local_platform}</p>
					</div>
				</button>
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
		addToState : (value)=>{
			const action ={ type: 'ADD_TO_STATE',value}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SpecificPlatform));