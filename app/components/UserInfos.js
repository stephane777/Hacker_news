import React from "react";
import PropTypes from "prop-types";
import UserPosts from "./UserPosts";
import formatDate from "../utils/formatDate";

class UserInfos extends React.Component {
	// state = {
	// 	userPosts: ""
	// };
	static propTypes = {
		id: PropTypes.string.isRequired,
		created: PropTypes.number.isRequired,
		karma: PropTypes.number.isRequired,
		submitted: PropTypes.array.isRequired
	};
	render() {
		const { about, created, karma, id, submitted } = this.props;
		function createMarkup() {
			return { __html: about };
		}
		// debugger;
		return (
			<React.Fragment>
				<div>
					<h2>{id}</h2>
					joined <b>{formatDate(created)}</b> has <b>{karma}</b> karma
					<p dangerouslySetInnerHTML={createMarkup()}></p>
					<h2>Posts</h2>
					<UserPosts posts={submitted} />
				</div>
			</React.Fragment>
		);
	}
}
export default UserInfos;
