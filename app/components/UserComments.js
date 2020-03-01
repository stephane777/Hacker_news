import React from "react";
import PropTypes from "prop-types";
import { fetchComments } from "../utils/api";
import formatDate from "../utils/formatDate";

class UserComments extends React.Component {
	static propTypes = {
		comments: PropTypes.array.isRequired
	};
	state = {
		loading: true,
		comments: ""
	};

	componentDidMount() {
		const { comments } = this.props;
		// console.log(comments);
		fetchComments(comments).then(comments =>
			this.setState({ comments, loading: false })
		);
	}
	render() {
		const { loading, comments } = this.state;

		return loading ? (
			<div>Loading</div>
		) : (
			// <div>test</div>
			comments.map(comment => {
				const { by, time, text } = comment;
				const createMarkup = () => ({ __html: text });
				return (
					<div key={time} className="comment">
						<div>
							by {by} on {formatDate(time)}
						</div>
						<p dangerouslySetInnerHTML={createMarkup()}></p>
					</div>
				);
			})
		);
	}
}
export default UserComments;
