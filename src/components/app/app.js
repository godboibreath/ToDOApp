import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id:'post1',
					label: "Going to learn React",
					important: false,
					like: false
				},
				{
					id:'post2',
					label: "That is good",
					important: false,
					like: false
				},
				{
					id:'post3',
					label: "I need to a break",
					important: false,
					like: false
				},
			],
			term: '',
			filter: 'all'
		};
		this.maxId = 'aaaa';
	}

	deletePost = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(element => element.id === id);
			const before = data.slice(0, index),
				after = data.slice(index + 1);
			
			const newArray = [...before, ...after];

			return {
				data: newArray
			}
		})
	}
	addPost = (body) => {
		const newItem = {
			id: this.maxId += 'A1',
			label: body,
			important: false,
			like: false
		}
		this.setState(({ data }) => {
			const newArray = [newItem,...data];
			return {
				data: newArray
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ data }) => {
			const newArr = data.map(item => {
				if (item.id === id) {
					item.important = !item.important
					return item
				}
				else return item
			})
			return {
				data: newArr
			}
		})
	}

	onToggleLiked = (id) => {
		this.setState(({ data }) => {
			const newArr = data.map(item => {
				if (item.id === id) {
					item.like = !item.like
					return item
				}
				else return item
			})
			return {
				data: newArr
			}
		})
	}

	searchPost (items,term) {
		if (term.length === 0) {
			return items
		}
		else {
			return items.filter(item => {
				return item.label.indexOf(term)>-1
			})
		}
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like);
		}
		else {
			return items;
		}
	}

	onUpdateSearch = (term) => {
		this.setState({
			term
		})
	}

	onFilterSelected = (filter) => {
		this.setState({filter})
	}

	render() {
		const { data, term, filter } = this.state;

		const liked = data.filter(item => item.like).length;
		const all = data.length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<div className="app">
				<AppHeader
					postsCount={all}
					liked={liked}
				/>
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>
					<PostStatusFilter
						filter={filter}
						onFilterSelected = {this.onFilterSelected}
					/>
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deletePost}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm onAdd={ this.addPost}/>
			</div>
		);
	}
};
