# React Development Practicum

Develop 3 React-based projects

## 1. Contact Manager App

👉[source code](https://github.com/amirahnasihah/contact-management-app)

Utilized JSON Server for CRUD operations and Semantic UI for a modern user interface. Implemented Context API for efficient state management and react-dom for navigation.

The Contact Manager App comprehensively explains the main React concepts and the React structure.

**Concepts Covered:**

- Functional Components vs. Class Components: In the initial stages, I explored the difference between functional and class components in React. While functional components are simpler and more efficient, class components have their advantages in certain scenarios, such as managing state and lifecycle methods.
- JSX: JSX, the JavaScript XML syntax, enabled me to write component structures in a more intuitive and declarative manner. This made my code easier to read and maintain.
- Semantic UI: To enhance the app's aesthetics, I utilized Semantic UI, a popular CSS framework. Leveraging its predefined classes and components, I ensured a visually appealing and user-friendly design.
- List Rendering: I efficiently rendered lists of contacts by mapping through data arrays. This enabled me to display multiple contact items dynamically.
- Props and Passing Functions as Props: I used props to pass data from parent components to child components, ensuring a seamless flow of information. Additionally, I passed functions as props to handle interactions and maintain data integrity.
- State and useEffect: State is a built-in feature in React that allows components to maintain and manage their data. When the state of a component changes, React automatically re-renders the component to reflect the updated state. The useEffect hook is used to handle side effects, such as fetching data or subscribing to events.
- Routing with React Router: I implemented page routing using React Router, allowing users to navigate through different pages and interact with the app smoothly.
- Integration with APIs and Axios: I successfully integrated the Contact Manager App with external data using Axios, a widely-used API connection module. This allowed me to fetch, update, and delete contacts from an external data source.

## 2. Find My News App

👉[source code](https://github.com/amirahnasihah/find-my-news)

Web app that utilizes the News API to fetch news. Implemented LocalStorage for authentication, bookmarking and Load More functionality. Integrated `dotenv` for environment variables

This app allows users to search for Twitter news articles based on their desired keywords.

The application provides a seamless experience for users to log in, search for news articles, display the results, and save their favourite news for future reference.

The primary goals I built this app are:

1. To let users log in to the application and automatically route them to the home page if they are already logged in.
2. Enable users to search for news articles based on their desired keywords.
3. Implement a "Load more results" feature to fetch additional news articles upon user request.
4. Allow users to open and read the complete news articles on the source website.
5. Provide users with the option to save their favourite news articles for later use.

The application will have two main screens:

a. Login Page: Users can log in to the application using their credentials.

b. Home Page: This page will include functionalities like search, displaying search results, and showing favourite articles.

The application will interact with a third-party API, specifically the News API, to fetch news articles based on user search keywords. It will also implement client-side pagination to display additional search results.

**To achieve the specified goals, the following tools and libraries will be utilized:**

1. React: Functional components (hooks) will be used to build the application's user interface.
2. Material UI: Extensively used for creating layout components, buttons, text fields, cards, progress bars, alerts, and more.
3. News API: Integrated to make API requests and retrieve news articles based on search keywords. Material UI provides several different ways to customize a component's styles.
4. React Router: Used for navigation between login and home components.
5. Dotenv: Employed to store and load environment variables, including the API key.
6. localStorage: Used to store login information and favourite news articles as an array of JSON objects.
7. EsLint: Utilized to ensure code consistency and identify lint errors.

## 3. Food Ordering App

👉[source code](https://github.com/amirahnasihah/food-order-app-usereducer)

Developed a React-based Food Ordering App using Context API for state management. Utilized Material UI for enhanced user interface design. Integrated Cloudinary for seamless image upload.

This web application is for users to browse and order food items from a menu, while also providing admin the ability to manage the menu and food items.

Users can easily browse through a variety of food items and add them to their cart with just a few clicks. Once the items are in the cart, users can view their selection, adjust item quantities, and even remove items if needed.

The Admin Functionality is to control the menu. Admin can add new food items to the menu and remove items that are no longer available. I implemented a user-friendly form component that enables administrators to enter new food item details and upload corresponding images using Cloudinary.

The use of functional components to create reusable UI elements and managed the overall application state using the Context API. Context API allowed for smooth data flow between components without excessive use of props. To enhance the user interface, I integrated Material UI, a third-party library that provided a set of pre-built components such as Appbar, Toolbar, Grid, Card, and Button for a consistent and visually appealing design.
