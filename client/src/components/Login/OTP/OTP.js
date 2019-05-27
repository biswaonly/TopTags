import React, { Component } from 'react';
import '../login.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input, Select, Button } from 'antd';
import OtpInput from 'react-otp-input';
 
const InputGroup = Input.Group;
const Option = Select.Option;

class OTP extends Component {
	inputOTPChange = () => {
		
	}
	render() {
		return (
			<div className="mob_log">
				<div className="mob_log_header">
					<h3>Enter Your Mobile No</h3>
				</div>
				<div></div>
				<OtpInput
          onChange={otp => console.log(otp)}
          numInputs={4}
          separator={<span></span>}
	        />
				<div>Resend OTP</div>
				<Button type="primary" style={{ width: '70%' }}>Enter</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OTP));