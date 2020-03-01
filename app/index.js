import React from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";
import Nav from "./components/Nav";
import Postlist from "./components/Postlist";
import User from "./components/User";
import Comments from "./components/Comments";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Route exact path="/" component={Postlist} />
					<Route path="/new" render={props => <Postlist type="new" />} />
					<Route path="/user" component={User} />
					<Route path="/comments" component={Comments} />
				</div>
			</Router>
		);
	}
}
// export default App;

ReactDOM.render(<App />, document.getElementById("root"));
