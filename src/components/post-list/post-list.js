/* eslint-disable react/prop-types */

import React from "react";
import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map((item) => {
		const { id, ...content } = item;
		return (
			<div key={id} className="list-group-item">
				<PostListItem
					{...content}
					onDelete={() => {
						onDelete(id);
					}}
					onToggleImportant={() => {
						onToggleImportant(id)
					}}
					onToggleLiked={() => {
						onToggleLiked(id)
					}}
				/>
			</div>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};



export default PostList;
