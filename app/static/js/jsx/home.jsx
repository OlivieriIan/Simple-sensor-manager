"use strict";

class App extends React.Component {

  render() { 
    return (
      <React.Fragment>
        <SensorManager />
        <HoverSquare />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app-content")
);