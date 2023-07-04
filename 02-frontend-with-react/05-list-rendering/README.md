- [Creating Dynamic Lists in React: A Step-by-Step Guide](#creating-dynamic-lists-in-react-a-step-by-step-guide)
- [Code Output](#code-output)
- [Getting Started](#getting-started)
- [What Components Needed](#what-components-needed)
- [Data Retrieving Component](#data-retrieving-component)
- [Display the Lists Component](#display-the-lists-component)
- [Reusable Component](#reusable-component)
- [Destructuring](#destructuring)
- [Full Code](#full-code)

# Creating Dynamic Lists in React: A Step-by-Step Guide

Lists in React are similar to lists in JavaScript. They are commonly used to display menus or a list of items on a website. **<mark>To use lists in React, we need to use a unique </mark>** `key` **<mark> attribute for each item in the list.</mark>** This is important because it helps React identify which items have been changed, updated or removed.

> Hey there friends! It's been a minute since I last posted on this platform, but I'm back and ready to dive into the world of React once again. Let's get started!

To create a list in React, it is best to **create a new component specifically for the list**. This component will take in the list data through `props`. Inside the component, we can use the `map` function to iterate through the list and display each item.

For the sake of simplicity and learning, this **article will give a simple example of creating a list of posts**, where the `key` is "id" of the post, and the "title" and "body" of the post is displayed. The final output of the tutorial is shown in an embedded code editor. It's recommended to follow this tutorial and practice it several times to better understand the concepts.

# Code Output

You will get this result once you have finished the tutorial.

<iframe src="https://codesandbox.io/embed/list-and-keys-oyww56?fontsize=14&hidenavigation=1&theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

[![Edit list-and-keys](https://codesandbox.io/static/img/play-codesandbox.svg align="left")](https://codesandbox.io/s/list-and-keys-oyww56?fontsize=14&hidenavigation=1&theme=dark)

# Getting Started

To begin, you can create react app using the command line or any code editor (e.g., VSCode). You can also directly use the [CodeSandbox](https://codesandbox.io/) for an online code editor that is simple to use and allows you to deploy your code.

# What Components Needed

First, we need to understand what components are required to display a list of blog posts using React. You will need to create at least the following components:

1. A component that retrieves the blog post data from a source, **a Parent component - (App.js).**

2. A component that renders the list of blog posts, **a Child component - (BlogList.js).**

3. A reusable component that can be reused in other parts of the application where you want to display a single blog post, **an Inner Child Component - (BlogCard.js).**

You can create these components as separate JavaScript files and import them into your main application file, where you can use them to build out the list of blog posts.

# Data Retrieving Component

1. `App.js` - This component would handle retrieving the blog post data from any source. For the sake of simplicity, we will just have a simple array of objects `[{key:value}, {key:value}]` and that is the `const posts`. Inside them, we have the `id`, `title`, and `body`.
    

We will import the BlogList component into the App component and pass the `posts` data through props because we want to use the `posts` data to be displayed in the BlogList.

**App.js**

```JSX
import BlogList from "./components/BlogList";

export default function App() {
	const posts = [
		{
			id: 1,
			title: "buildspace web3 demo showcase!",
			body:
				"Last night's buildspace demo day was a blast, as was go-karting around the map on gather.town dressed as a pumpkin. It's a massive web3 display! Over…"
		},
		{
			id: 2,
			title: "ReactJS - Introduction",
			body:
				"What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
		},
		{
			id: 3,
			title: "Build Metaverse with Gather.Town for Free",
			body:
				"Gather.Town Looking for more interactive web-conferencing software like Zoom, but with more fun virtual interactions just like in real life. Then, you…"
		}
	];

	return (
		<div>
			<BlogList posts={posts} />
		</div>
	);
}
```

# Display the Lists Component

1. `BlogList.js` - This component would render the list of blog posts using the data retrieved by the `App`component and display all the posts on our screen browser.
    

Inside the BlogList functional component, it will take `props`.

```JSX
import BlogCard from "./BlogCard";

const BlogList = (props) => {
	const content = props.posts.map((post) => {
		return <BlogCard key={post.id} props={post} />;
	});

	return (
		<div>
			<h1>My Posts</h1>
			<div>{content}</div>
		</div>
	);
};

export default BlogList;
```

This code is a React component named BlogList which maps over an array of blog posts (`props.posts`) and returns an array of BlogCard components. Each BlogCard component is rendered with a unique `key` prop ([`post.id`](http://post.id)) and passed the whole post data as `props` (`props={post}`).

**<mark>Let's go line-by-line through the code:</mark>**

1. `import BlogCard from "./BlogCard"`: This line imports a component called `BlogCard` from another file called `BlogCard.js` in the same directory.
    
2. `const BlogList = (props) => {...}`: This line creates a new component called `BlogList` using a special type of function called an arrow function. This component will receive data from outside the component through its `props` argument.
    
3. `const content =` [`props.posts.map`](http://props.posts.map)`((post) => {`: This line creates a new constant called `content` which will contain an array of components created by mapping over the `posts` array received through `props`. It maps through an array of posts stored in `props` and creates a new array of `BlogCard` components for each post where it will return a component for each post. <mark>"Mapping through an array"</mark> means iterating/looping over the elements of an array and performing a specific operation on each element.
    
4. `return <BlogCard key={post.id} props={post} />;`: This line returns a new component of type `BlogCard` for each `post` in the `posts` array. The component will receive data through its `props` argument and will have a `key` property set to the `id` of the current `post`. **Remember to use lists in React, we need to have a unique key attribute for each item in the list.** Otherwise, a warning will appear.
    
5. `<div>{content}</div>`: This line returns a `div` element that contains all the `BlogCard` components created in the previous step. Which embeds the mapped array of `BlogCard` components into a div element.
    
6. `<h1>My Posts</h1>`: This line displays a header element with the text "My Posts".
    
7. `<div>...</div>`: This line wraps the header and the `content` div in a parent div.
    
8. `export default BlogList;`: This line exports the `BlogList` component so that it can be used in other files.
    

The overall **logic of this code** is to create a <mark>component </mark> `BlogList` <mark> that displays a list of blog posts using the </mark> `BlogCard` <mark> component</mark>. The component receives data about the posts through its `props` argument, maps over the `posts` array to create an array of `BlogCard` components, and displays these components in a div along with a header.

# Reusable Component

1. `BlogCard.js` - This component would be a reusable component that takes a single blog post as a prop and displays the details of the blog post in a card format. This component can be reused in other parts of the application where you want to display a single blog post.
    

<mark>This component uses destructuring assignment</mark> to extract the "id", "title", and "body" properties from the props object.

This component in React is called "BlogCard". It takes in a prop called "props", which contains information about a blog post. The component then uses destructuring assignment to extract the "id", "title", and "body" properties from the props object.

The component then returns a JSX element that **<mark>displays the post information in a specific format.</mark>** The id of the post is displayed first, followed by its title, and then its body content.

```javascript
const BlogCard = ({ props }) => {
	const { id, title, body } = props;

	return (
		<div>
			<h2>
				{id}. {title}
			</h2>
			<p>{body}</p>
		</div>
	);
};

export default BlogCard;
```

**<mark>Let's go through line-by-line:</mark>**

1. `const BlogCard = ({ props }) => {...}`: This line creates a new component called `BlogCard` using an arrow function. This component will receive data from outside the component through its `props` argument.
    
2. `const { id, title, body } = props;`: This line uses destructuring to extract the `id`, `title`, and `body` properties from the `props` object.
    
3. `<h2>{id}. {title}</h2>`: This line returns a header element with the `id` and `title` properties from the `props` object.
    
4. `<p>{body}</p>`: This line returns a paragraph element with the `body` property from the `props` object.
    
5. `<div>...</div>`: This line wraps the header and paragraph elements in a parent div.
    
6. `export default BlogCard;`: This line exports the `BlogCard` component so it can be used in other files.
    

The overall logic of this code is to create a component `BlogCard` that displays a single blog post. The component receives data about the post through its `props` argument and displays the post's `id`, `title`, and `body` properties in a header and a paragraph element.

# Destructuring

Destructuring is a feature in JavaScript that allows you to extract data from arrays or objects and assign them to variables. The main purpose of destructuring is to make it easier and more convenient to access the properties and values of an object or array.

```javascript
// First code snippet
const BlogList = (props) => {

// vs

// Second code snippet
const BlogCard = ({ props }) => {
```

**<mark>What is the difference between these two? Why are props inside the BlogList not destructured?</mark>**

The difference between these two code snippets is that in the first code snippet, `props` is passed to the `BlogList` component as a single argument, and in the second code snippet, `props` is destructured from the props object passed to the `BlogCard` component.

1. First code snippet - `props` is an object that contains all of the properties that are passed to the `BlogList` component. In this case, it is **not necessary to destruct the props object, as the code only needs to access one property,** `posts`**.**
    
2. Second code snippet - `props` **is destructured from the props object**, allowing for the properties `id`, `title`, and `body` to be accessed directly. This reduces the need to access properties through the `props` object and makes the code more readable and maintainable.
    

In short, **the difference is in the way that the properties are accessed within the component**. The **<mark>first code snippet accesses the properties through the </mark>** `props` **<mark> object, while the second code snippet accesses the properties directly by destructuring the </mark>** `props` **<mark> object.</mark>**

# Full Code

***App.js***

```javascript
import BlogList from "./components/BlogList";

export default function App() {
	const posts = [
		{
			id: 1,
			title: "buildspace web3 demo showcase!",
			body:
				"Last night's buildspace demo day was a blast, as was go-karting around the map on gather.town dressed as a pumpkin. It's a massive web3 display! Over…"
		},
		{
			id: 2,
			title: "ReactJS - Introduction",
			body:
				"What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
		},
		{
			id: 3,
			title: "Build Metaverse with Gather.Town for Free",
			body:
				"Gather.Town Looking for more interactive web-conferencing software like Zoom, but with more fun virtual interactions just like in real life. Then, you…"
		}
	];

	return (
		<div>
			<BlogList posts={posts} />
		</div>
	);
}
```

***BlogList.js***

```javascript
import BlogCard from "./BlogCard";

const BlogList = (props) => {
	const content = props.posts.map((post) => {
		return <BlogCard key={post.id} props={post} />;
	});

	return (
		<div>
			<h1>My Posts</h1>
			<div>{content}</div>
		</div>
	);
};

export default BlogList;
```

***BlogCard.js***

```javascript
const BlogCard = ({ props }) => {
	const { id, title, body } = props;

	return (
		<div>
			<h2>
				{id}. {title}
			</h2>
			<p>{body}</p>
		</div>
	);
};

export default BlogCard;
```

---

👉 Please share my posts with the community at [**daily.dev**](http://daily.dev) / social media by adding the article's URL to the feed. By adding my article's URL to the feed, I can share my insights and knowledge with other tech enthusiasts and contribute to the passionate community.

`Cheers✨`

> <mark>Thank you</mark> for your continued support and for sticking around even though I've been away for a bit. I've been busy with some exciting projects, but I'm thrilled to be back and writing again!