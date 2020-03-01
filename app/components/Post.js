import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import Title from "./Title";

class Post extends React.Component {
	static propTypes = {
		// id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		// url: PropTypes.string.isRequired,
		by: PropTypes.string.isRequired,
		time: PropTypes.number.isRequired,
		descendants: PropTypes.number.isRequired,
		class_title: PropTypes.string.isRequired
	};
	render() {
		const { title, by, time, descendants, url, id, class_title } = this.props;
		// !id ? console.log(this.props) : null;
		return (
			<React.Fragment>
				<div className="post--container">
					{/* <a href={url}>
						<div className={class_title}>{title}</div>
					</a> */}
					<Title id={by} url={url}>
						<div className={class_title}>{title}</div>
					</Title>
					<div className="post--details">
						by{" "}
						<Link
							to={{
								pathname: "/user",
								search: `?id=${by}`
							}}
						>
							{this.props.by}
						</Link>{" "}
						on {formatDate(time)} with{" "}
						<Link
							to={{
								pathname: "/comments",
								search: `?id=${id}`
							}}
						>
							{descendants}
						</Link>{" "}
						comments
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
//  https://hacker-news.firebaseio.com/v0/user/robert-boehnke.json?print=pretty

// React Context
// lift up the author to index.js and save it in state
//
