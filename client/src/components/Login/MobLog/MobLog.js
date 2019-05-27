	import React, { Component } from 'react';
	import '../login.css';
	import { connect } from 'react-redux';
	import { withRouter } from 'react-router-dom';
	import { Input, Select, Button } from 'antd';

	const InputGroup = Input.Group;
	const Option = Select.Option;



	class MobLog extends Component {
		receiveOTP = () => {
			console.log('ABCCC');
			
			this.props.history.push('otp');
		}
		render() {
			return (
				<div className="mob_log">
					<div className="mob_log_header">
						<h3>Enter Your Mobile No</h3>
					</div>
					<InputGroup compact>
						<Select defaultValue="Zhejiang" style={{ width: '20%' }} >
							<Option value="Zhejiang">+91</Option>
							<Option value="Jiangsu">+92</Option>
						</Select>
						<Input style={{ width: '50%' }} defaultValue="9681969781" allowClear/>
					</InputGroup>
					<Button type="primary" style={{ width: '70%' }} onClick={this.receiveOTP}>Enter</Button>
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

	export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MobLog));