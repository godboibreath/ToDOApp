import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	onUpdateSearch = (e) => {
		this.setState({
			term: e.target.value
		})
		this.props.onUpdateSearch(this.state.term)
	}
	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="search"
				onChange={this.onUpdateSearch}
				value = {this.state.term}
			/>
		)
	}
}
