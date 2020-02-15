import React from "react";

import Post from "./Post";
import {
	fechComments,
	fetchMainPosts,
	fetchItem,
	fetchUser,
	fetchPosts
} from "../utils/api";

class Topstories extends React.Component {
	state = {
		mainPost: []
	};

	componentDidMount() {
		// console.log(`componentDidMount`);
		fetchMainPosts("top").then(result => {
			// console.log(result);
			this.setState({ mainPost: result });
		});
	}

	render() {
		const stories = this.state.mainPost.map(story => {
			const { by, descendants, time, title, url, id } = story;
			return (
				<Post
					key={id}
					by={by}
					descendants={descendants}
					time={time}
					url={url}
					title={title}
				/>
			);
		});
		const isLoading = this.state.mainPost.length;
		return !isLoading ? "Loading" : stories;
	}
}

export default Topstories;
