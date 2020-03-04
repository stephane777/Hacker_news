import React from "react";
import PropTypes from "prop-types";
import { fetchComments } from "../utils/api";
import formatDate from "../utils/formatDate";
import { Themeconsumer, ThemeConsumer } from "../contexts/theme";
import Loading from "../utils/Loading";

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
			<Loading />
		) : (
			// <div>test</div>
			comments.map(comment => {
				const { by, time, text } = comment;
				const createMarkup = () => ({ __html: text });
				return (
					<ThemeConsumer>
						{({ theme }) => (
							<div key={time} className={`comment comment-${theme}`}>
								<div>
									by {by} on {formatDate(time)}
								</div>
								<p dangerouslySetInnerHTML={createMarkup()}></p>
							</div>
						)}
					</ThemeConsumer>
				);
			})
		);
	}
}
export default UserComments;
