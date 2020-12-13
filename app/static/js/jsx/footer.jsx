"use strict";

class Footer extends React.Component {

  render() {
    return(
      <footer>
        <p class="app-footer">&copy; Copyright 2020</p> 
      </footer>
    );
  }
}


ReactDOM.render(
  <Footer />,
  document.getElementById("app-footer")
);