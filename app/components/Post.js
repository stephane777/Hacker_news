import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
	// static propTypes = {
	// 	by: PropTypes.string.isRequired,
	// 	title: PropTypes.string.isRequired,
	// 	descendants: PropTypes.number.isRequired,
	// 	url: PropTypes.string.isRequired
	// };
	formatDate(timestamp) {
		const newDate = new Date(timestamp * 1000);
		const isoDate = newDate.toISOString();
		const [date, time] = isoDate.split("T");
		const formatTime = time => {
			const isPM = time.slice(0, 5).split(":")[0] > 12;
			return isPM
				? `${time.slice(0, 5).split(":")[0] - 12}:${
						time.slice(0, 5).split(":")[1]
				  } PM`
				: `${time} AM`;
		};
		return `${date
			.split("-")
			.reverse()
			.join("/")} , ${formatTime(time)}`;
	}
	render() {
		return (
			<div className="post--container">
				<div className="post--title">{this.props.title}</div>
				<div className="post--details">
					by {this.props.by} on {this.formatDate(this.props.time)} with{" "}
					{this.props.descendants} comments
				</div>
			</div>
		);
	}
}

export default Post;
//  https://hacker-news.firebaseio.com/v0/user/robert-boehnke.json?print=pretty
