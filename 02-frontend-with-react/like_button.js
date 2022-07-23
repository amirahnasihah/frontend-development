'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};
	}

	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}

		return e(
			'button',
			{
				onClick: () => this.setState({
					liked: true
				})
			},
			'Like'
		);
	}
}

// This code defines a React component called LikeButton. we’ll cover the building blocks of React later in hands-on tutorial and main concepts guide.


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


// Above three lines of code find the <div> you added to your HTML in the first step, create a React app with it, and then display your “Like” button React component inside of it.