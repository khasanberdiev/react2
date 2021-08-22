import "./styles.css";
import React from "react";
import ReactDom from "react-dom";
import SeasonDetail from "./SeasonDetail";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, errMessage: "" };
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errMessage: null };
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDetail lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errMessage) {
      return <div> Error Message: {this.state.errMessage}</div>;
    }
    return (
      <div>
        <Spinner message="Please accept location request..." />
      </div>
    );
  }

  render() {
    // window.navigator.geolocation.getCurrentPosition();
    return <div className="red body"> {this.renderContent()}</div>;
  }
}
// export default App;
ReactDom.render(<App />, document.querySelector("#root"));
