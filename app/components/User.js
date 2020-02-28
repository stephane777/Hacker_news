import React from "react";
import PropTypes from "prop-types";
import UserInfos from "./UserInfos";
import queryString from "query-string";
import Postlist from "./Postlist";
import { fetchUser } from "../utils/api";
import UserPosts from "./UserPosts";

class User extends React.Component {
	// static propTypes = {
	// 	user: PropTypes.string.isRequired
	// };
	state = {
		userInfo: "",
		loading: true
	};
	componentDidMount() {
		// const { user } = queryString.parse(this.props.location.search);
		const { id } = queryString.parse(this.props.location.search);
		// console.log(`id: ${id}`);
		fetchUser(id).then(result =>
			this.setState({ userInfo: result, loading: false })
		);
	}
	render() {
		console.log(this.state.userInfo);
		const { userInfo, loading } = this.state;
		// const { id } = queryString.parse(this.props.location.search);
		const { about, created, karma, id, submitted } = userInfo;
		return loading ? (
			<h3>Loading UserInfo</h3>
		) : (
			<React.Fragment>
				<UserInfos
					about={about}
					created={created}
					id={id}
					karma={karma}
					submitted={submitted}
				/>
				{/* <UserPosts user={id} /> */}
			</React.Fragment>
		);
	}
}

export default User;
