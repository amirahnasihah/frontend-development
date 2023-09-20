# FE (ReactJS) CRUD Operations

- GET retrieves data from an API.
- POST sends new data to an API.
- PATCH and **PUT** update existing data.
- DELETE removes existing data.

> reactjs: components, props, states, hooks, context api

common dependencies installed:
- axios
- react-router-dom
- ui libraries like MUI/Semantic UI
- 


# Setting up JSON server API

JSON server is like a simple db connection for front-end to perform CRUD operations.

1. create a new folder: **server-api**

2. go to server-api folder → open in integrated terminal (vscode) → type `npm init --yes` to create the `package.json` file.

3. Go here: [json-server](https://www.npmjs.com/package/json-server)

4. Follow the instructions:
-- Install JSON Server type; `npm install -g json-server` (for global), for under the server-api folder `npm install --save json-server`. Recommended use `npm install --save json-server`

1. Create a file called `db.json` under the server-api folder. Inside the `db.json` file, we create our resource which will be a JSON object.

Example:

```json
// db.js
{
    "itemsData": [
        
    ]
}
```

pasting some fake data:

```json
{
  "itemsData": [
    {
      "id": "476a6332-7b79-4c55-bbef-9f5e8ed5b5bd",
      "name": "John",
      "email": "john@example.com"
    },
    {
      "id": "2c40e4f8-24bc-484d-8a39-483e210e1568",
      "name": "Jane",
      "email": "jane@example.com"
    }
  ]
}
```

5. Go to `package.json` file, under server-api folder → go to `"scripts": {...}` → remove the following: `"test": "echo \"Error: no test specified\" && exit 1"` → update with this: `"start": "json-server -p 3006 -w db.json"`

6. Open the intergrated terminal under server-api folder → type: `npm start`

7. Click to go to any of this:

```shell
Resources
http://localhost:3006/itemsData

Home
http://localhost:3006
```

**Re-starting the JSON server:**

1. if the node_modules folder deleted or not exist
2. type `npm install` → run the server with `npm start` in integrated terminal

Common ReactJS Dependencies:

1. axios
2. react-router-dom
3. json-server
4. material-ui (ui library)
5. dotenv
6. react-toastify
7. sweetalert2
8. uuidv4

To make changes so that we can fetch the data from the json server and not from local storage:

1. Install AXIOS under the React app folder
2. Create a new folder named `api`. Inside, create a new file named `contacts.js` (it will contain codes about API calls)
3. Go to the `contacts.js` file, put it like this:

```javascript
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/",
});
```

4. Axios is installed so now we can make changes (CRUD) in our React app

## GET method

> example for API endpoint: https://jsonplaceholder.typicode.com/users

```javascript
// importing hooks and api
import { useEffect, useState } from "react";
import api from "../api/itemsData";

// state variable
const [data, setData] = useState([])

// get data from api
useEffect(() => {
  // actual code to get data
  const getData = async () => {
    try {
      // const response = await axios.get("other-url-like-json-placeholder");
      const response = await api.get("/itemsData");
      setData(response.data);
    }
    catch (error) {
      console.log(error.message)
    }
  }

  geData()
}, [])
```

## PUT method - to update

**PUT	/tasks/{taskId}	Task	Task	Update a task**

Example; mark tasks completed:

```javascript
fetch('https://PROJECT_TOKEN.mockapi.io/tasks/1', {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify({completed: true})
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})
```

### edit w/ modal or at different page

```javascript
// 1️⃣ItemsProvider
const updateItem = async (id, updatedItem) => {
  try {
    const response = await api.put(`/fakeData/${id}`, updatedItem);
    const updatedData = itemsData.map((item) =>
      item.id === id ? { ...response.data } : item
    );
    setItemsData(updatedData);
    console.log("Item updated successfully");
  } catch (error) {
    console.error(`Error updating item: ${error.message}`);
  }
};

// 2️⃣EditModal
export default function EditModal({ open, onClose, item }) {
  
  const { updateItem } = useItemsCrud();
  const [updatedItem, setUpdatedItem] = useState(item);
  const { name, description, price } = updatedItem;

  // HANDLING SUBMIT OF UPDATE FORM
  const update = async (e) => {
    e.preventDefault();
    try {
      await updateItem(updatedItem.id, updatedItem);
      toast.success("Item updated successfully");
      onClose();
    } catch (error) {
      toast.error(`Error updating item: ${error.message}`);
    }
  };

  // HANDLE INPUT FIELD
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  // 3️⃣HTML FORM
  <form onSubmit={update}>
  
  {/* handle for Name field */}
  <input
  label="Name"
  name="name"
  value={name}
  onChange={handleInputChange}
  />;

  {/* handle for Description text area */}
  <textarea
  rows={4}
  label="Description"
  placeholder="Description"
  name="description"
  value={description}
  onChange={handleInputChange}
  />;

  {/* handle for Price field */}
  <input
  label="Price"
  name="price"
  type="number"
  value={price}
  onChange={handleInputChange}
  />;

  {/* SAVE the updated value */}
  <button type="submit">Save</button>;
  
  </form>
}
```

## POST - to add/create data

> axios.post()

```javascript

```

## DELETE - to delete a data

> axios.delete

```javascript

```
