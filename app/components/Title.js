import React from "react";
import { Link } from "react-router-dom";

const Title = props => {
	return props.url ? (
		<a href={props.url}>{props.children}</a>
	) : (
		<Link to={{ pathname: "/user", search: `?id=${props.id}` }}>
			{props.children}
		</Link>
	);
};

export default Title;
