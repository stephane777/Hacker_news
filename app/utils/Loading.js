import React from "react";

class Loading extends React.Component {
	state = {
		text: "Loading",
		timer: ""
	};

	componentDidMount() {
		const timer = setInterval(() => {
			const { text } = this.state;
			const dot = text.replace(/[^\.]/g, "");
			dot.length < 3
				? this.setState(({ text }) => {
						console.log(`state: ${text}`);
						return { text: text + ".", timer };
				  })
				: this.setState({ text: "Loading" });
			console.log(new Date());
		}, 200);
	}
	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		const { text } = this.state;
		return <h3>{text}</h3>;
	}
}

export default Loading;
