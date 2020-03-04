import React from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
import Nav from "./components/Nav";
import Postlist from "./components/Postlist";
import User from "./components/User";
import Comments from "./components/Comments";
import { ThemeProvider } from "./contexts/theme";

class App extends React.Component {
	state = {
		theme: "light",
		toggleTheme: () => {
			this.setState(({ theme }) => ({
				theme: theme === "light" ? "dark" : "light"
			}));
		}
	};
	render() {
		return (
			<Router>
				<ThemeProvider value={this.state}>
					<div className={this.state.theme}>
						<div className={`container ${this.state.theme}`}>
							<Nav />
							<Route exact path="/" component={Postlist} />
							<Route path="/new" render={props => <Postlist type="new" />} />
							<Route path="/user" component={User} />
							<Route path="/comments" component={Comments} />
						</div>
					</div>
				</ThemeProvider>
			</Router>
		);
	}
}
// export default App;

ReactDOM.render(<App />, document.getElementById("root"));
