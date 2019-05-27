import React, { Component } from 'react'
import Dropzone from 'react-dropzone'


export default class DropImg extends Component {
	render() {
		return (
			<div>
				<Dropzone
					maxSize = {1000}
					minSize = {100}
					multiple = {false}
					onDrop={acceptedFiles => console.log(acceptedFiles)}
				>
					{({getRootProps, getInputProps}) => (
						<section>
							<div {...getRootProps()}>
								<input {...getInputProps()} />
								<p>Drag 'n' drop some files here, or click to select files</p>
							</div>
						</section>
					)}
				</Dropzone>
			</div>
		)
	}
}
