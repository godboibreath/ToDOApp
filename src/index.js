import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/";

/*class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
	componentDidMount() {
		setInterval(()=>this.tick(), 1000);
	}
	render() {
		return (
			<>
				<p> { this.state.date.toLocaleTimeString()}</p>
			</>
		)
	}
}
*/
//ReactDOM.render(<Clock />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
