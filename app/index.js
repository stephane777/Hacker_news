import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import Topstories from "./components/Topstories";
const topContainer = () => {};

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Topstories />
			</div>
		);
	}
}
// export default App;

ReactDOM.render(<App />, document.getElementById("root"));
