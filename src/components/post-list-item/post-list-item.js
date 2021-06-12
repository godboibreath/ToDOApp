/* eslint-disable react/prop-types */
import React from 'react'

import './post-list-item.css'

export default class PostListItem extends React.Component{
	render() {
		const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
		let classNames = 'app-list-item d-flex justify-content-between';
		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}
		return (
			<li className={classNames}>
				<span className="app-list-item-label" onClick = {onToggleLiked}>
					{ label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button type="submit" className="btn btn-star btn-sm">
						<i className="fa fa-star" onClick = {onToggleImportant} ></i>
					</button>
					<button type="submit" className="btn btn-trash btn-sm" onClick = {onDelete}>
						<i className="fa fa-trash"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</li>
		);
	}
}

