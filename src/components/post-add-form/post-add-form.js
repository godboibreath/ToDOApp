import React from 'react'

import './post-add-form.css';

export default class PostAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}
	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		})	
	}
	onSubmit = (e) => {
		e.preventDefault()
		this.props.onAdd(this.state.text);
		this.setState({
			text: ''
		})
	}
	render() {
		return (
			<form
				className="bottom-panel d-flex"
				onSubmit={this.onSubmit}
			>
				<input
					type="text"
					placeholder="your post"
					className="form-control new-post-label"
					onChange={this.onValueChange}
					value = {this.state.text}
				/>
				<button
					type="submit"
					className='btn btn-outline-secondary'
					>Add</button>
			</form>
		)
	}
}
