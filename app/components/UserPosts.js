import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

import { fetchPosts } from "../utils/api";

class UserPosts extends React.Component {
	state = {
		posts: "",
		isLoading: true
	};
	static propTypes = {
		posts: PropTypes.array.isRequired
	};

	componentDidMount() {
		// console.log(`componentDidMount: ${this.props.posts}`);
		const posts = this.props.posts.slice(0, 30);
		fetchPosts(posts).then(posts => this.setState({ posts }));
	}
	render() {
		const isLoading = !this.state.posts;
		return isLoading ? (
			<div>Loading Posts</div>
		) : (
			<React.Fragment>
				{this.state.posts.map(post => (
					<Post
						key={post.id}
						by={post.by}
						descendants={post.descendants}
						time={post.time}
						url={post.url}
						title={post.title}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default UserPosts;
