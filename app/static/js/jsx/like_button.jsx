class LikeButton extends React.Component {
  state = { liked: false };

  render() {
    if (this.state.liked) { return 'You liked this.'; }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        like
      </button>

    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton/>, domContainer);