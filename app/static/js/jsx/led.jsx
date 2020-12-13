"use strict";

class Led extends React.Component {

  render() {
    const {color} = this.props;
    return(
      <div className={"led-" + color + ""}></div>
    );
  }
}