'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// This code defines a React component called LikeButton. Don’t worry if you don’t understand it yet — we’ll cover the building blocks of React later in our hands-on tutorial and main concepts guide. For now, let’s just get it showing on the screen!