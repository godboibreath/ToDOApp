import React from "react";

import "./post-status-filter.css";

export default class PostStatusFilter extends React.Component {
	constructor(props) {
		super(props)
		this.buttons = [
			{
				name: 'all',
				label: 'All'
			},
			{
				name: 'like',
				label: 'Liked'
			}
		]
	}

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const claz = active ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button
					key={name}
					type="button"
					className={`btn ${claz}`}
					onClick={ () => this.props.onFilterSelected(name)}>
					{label}
				</button>
			)
		})
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
};

