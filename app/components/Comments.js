import React from "react";
import QueryString from "query-string";
import { fetchItem } from "../utils/api";
import Post from "./Post";
import UserComments from "./UserComments";

class Comments extends React.Component {
	state = {
		loading: true,
		post: ""
	};
	componentDidMount() {
		const { id } = QueryString.parse(this.props.location.search);
		fetchItem(id).then(post => {
			// console.log(post);
			// console.log(post.kids);
			this.setState({ loading: false, post });
		});
	}
	render() {
		const { loading, post } = this.state;
		return loading ? (
			<div>loading</div>
		) : (
			<div className="comments">
				<Post
					id={post.id}
					title={post.title}
					url={post.url}
					by={post.by}
					time={post.time}
					descendants={post.descendants}
					class_title="post--comment"
				/>
				<UserComments comments={post.kids} />
			</div>
		);
	}
}

export default Comments;
