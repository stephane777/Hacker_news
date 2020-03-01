import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = props => {
	return (
		<nav className="row space-between">
			<ul className="row nav">
				<li className="nav-link">
					<NavLink
						exact
						to={{ pathname: "/" }}
						activeStyle={{
							fontWeight: "bold",
							color: "#C71F1F",
							textDecoration: "none"
						}}
					>
						Top
					</NavLink>
				</li>
				<li className="nav-link">
					<NavLink
						to={{ pathname: "/New" }}
						activeStyle={{
							fontWeight: "bold",
							color: "#C71F1F",
							textDecoration: "none"
						}}
					>
						New
					</NavLink>
				</li>
			</ul>
			<button style={{ fontSize: 30 }} className="btn-clear">
				{"💡"}
			</button>
		</nav>
	);
};

export default Nav;

// 🔦  💡
