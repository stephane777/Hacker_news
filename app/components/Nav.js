import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeConsumer } from "../contexts/theme";

const Nav = props => {
	return (
		<ThemeConsumer>
			{({ theme, toggleTheme }) => (
				<nav className="row space-between">
					<ul className="row nav">
						<li className={`nav-link nav-${theme}`}>
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
						<li className={`nav-link nav-${theme}`}>
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
					<button
						style={{ fontSize: 30 }}
						className="btn-clear"
						onClick={toggleTheme}
					>
						{theme === "light" ? "🔦" : "💡"}
					</button>
				</nav>
			)}
		</ThemeConsumer>
	);
};

export default Nav;

// 🔦  💡
