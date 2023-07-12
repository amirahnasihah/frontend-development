- [Introduction](#introduction)
  - [Project Components](#project-components)
  - [import api from "../api/itemsData.js"](#import-api-from-apiitemsdatajs)
  - [Show Alert `updateMyFav`](#show-alert-updatemyfav)
- [Need to fix!!](#need-to-fix)

# Introduction

A news app using News API

## Project Components

1. Login
2. Home
   a. Header
   b. FavPanel
   c. DisplayResults
   c1. NewsItem
   d. custom button

<!-- PARAMETERS -->

API_KEY: This is the API_KEY which will let us access the API.

KEYWORD: This is the actual keyword for which we are going to search the news articles.

PAGE_SIZE: This will be the number of results returned per request.

PAGE_NO: The page number for which we want to display the results. Something like in Google Search where we can go to next page (2nd page). Feel free to explore other parameters as well.

## import api from "../api/itemsData.js"

**inside ../api/itemsData.js**

```javascript
import axios from "axios";

export default axios.create({
	baseURL: "https://63e6761e83c0e85a86945647.mockapi.io"
});
```

**Component**

```javascript
import api from "../api/meals";

// get data from api and display it
useEffect(() => {
	getData();
}, []);

const getData = async () => {
	try {
		const response = await api.get("/meals");
		setItemsData(response.data);
	} catch (err) {
		if (err.response) {
			// Not in the 200 response range
			console.error(err.response.data);
			console.error(err.response.status);
			console.error(err.response.headers);
		} else {
			console.error(`Error: ${err.message}`);
		}
	}
};
```

## Show Alert `updateMyFav`

ori

```javascript
const updateMyFav = (news) => {
	// Retrieve the current favorites from localStorage
	let savedFavorites = localStorage.getItem("myFavourites");
	// If there are no favorites in localStorage, create an empty array
	if (!savedFavorites) {
		savedFavorites = [];
	} else {
		// Otherwise, parse the favorites from localStorage as JSON
		savedFavorites = JSON.parse(savedFavorites);
	}

	// Check if the news item is already in the "myFavourites" list
	const existingFavorite = myFavorites.find(
		(favorite) => favorite.name === news.name
	);
	if (!existingFavorite) {
		// Add the new favorite to the array with a unique identifier
		const newFavorite = { name: news.name, ...news };
		savedFavorites.push(newFavorite);
		// Save the updated favorites array to localStorage
		localStorage.setItem(
			LOCALS_STORAGE_KEY,
			JSON.stringify(savedFavorites)
		);
		// If it's not, add it to the list
		setMyFavorites([...myFavorites, newFavorite]);
	}
};
```

Chatgpt

```javascript
const updateMyFav = (news) => {
	const existingFavorite = myFavorites.find(
		(favorite) => favorite.name === news.name
	);
	if (!existingFavorite) {
		// Add the new favorite to the array with a unique identifier
		const newFavorite = { name: news.name, ...news };
		setMyFavorites([...myFavorites, newFavorite]);
		// Save the updated favorites array to localStorage
		localStorage.setItem(
			LOCALS_STORAGE_KEY,
			JSON.stringify([...myFavorites, newFavorite])
		);
	} else {
		setShowAlert(true);
	}
};
```

# Need to fix!!

Here's are the feedback:

1. If the user is already logged in, and they try to go to the login link then they should be redirected to the homepage, not stay on the login page. Also, if a user is logged out, then navigating to home should not be allowed, but in your case it is, so you should fix that.✅

2. The logout functionality does not seem to work properly as well, when logging out no data is signifying that the user is logged in is removed or signified that the user is logged out.

3. The search functionality does not work as expected, also after searching the load more functionality does not work anymore, so you should look into that and try to fix it.🤔
