// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import "./styles.css";
import React from "react";
import ReactDom from "react-dom";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
    });
  }
  render() {
    // window.navigator.geolocation.getCurrentPosition();

    return <div>Latitude: {this.state.lat}</div>;
  }
}
// export default App;
ReactDom.render(<App />, document.querySelector("#root"));
