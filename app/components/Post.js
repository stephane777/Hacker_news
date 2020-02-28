import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

class Post extends React.Component {
	render() {
		return (
			<div className="post--container">
				<a href={this.props.url}>
					<div className="post--title">{this.props.title}</div>
				</a>
				<div className="post--details">
					by{" "}
					<Link
						to={{
							pathname: "/user",
							search: `?id=${this.props.by}`
						}}
					>
						{this.props.by}
					</Link>{" "}
					on {formatDate(this.props.time)} with {this.props.descendants}{" "}
					comments
				</div>
			</div>
		);
	}
}

export default Post;
//  https://hacker-news.firebaseio.com/v0/user/robert-boehnke.json?print=pretty

// React Context
// lift up the author to index.js and save it in state
//
