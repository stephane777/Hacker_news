import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import {
	fechComments,
	fetchMainPosts,
	fetchItem,
	fetchUser,
	fetchPosts
} from "../utils/api";

class Postlist extends React.Component {
	state = {
		mainPost: []
	};
	static defaultProps = {
		type: "top" // default will be top
	};
	static propTypes = {
		type: PropTypes.string.isRequired
	};

	componentDidMount() {
		// console.log(`componentDidMount`);
		fetchMainPosts(this.props.type).then(result => {
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

export default Postlist;
