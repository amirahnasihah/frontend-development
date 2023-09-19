# Inside Context file

ContactsCrudProviderContext.js:

```javascript
import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuidv4 } from "uuid";

const contactsCrudContext = createContext();

export function ContactsCrudProviderContext({ children }) {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };

  // DeleteContacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // AddContacts
  const addContactHandler = async (contact) => {
    // console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    // console.log(response);

    setContacts([...contacts, response.data]);
  };

  // UpdateContacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // SearchFunctionality
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    contact,
    searchTerm,
    searchResults,
    setContact,
    retrieveContacts,
    removeContactHandler,
    addContactHandler,
    updateContactHandler,
    searchHandler,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
```

Then, to use the context we import it to our main App file. For Context folders there are another way to create a Context by separating between Context and Provider.

App.js:

```javascript
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";

// importing Context
import { ContactsCrudProviderContext } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Header />
      <ContactsCrudProviderContext>
        <Routes>
          {/* Contact List */}
          <Route path="/" exact element={<ContactList />} />
          {/* ADD */}
          <Route path="/add" element={<AddContact />} />
          {/* EDIT */}
          <Route path="/edit" element={<EditContact />} />
          {/* Contact Detail */}
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </ContactsCrudProviderContext>
    </div>
  );
}

export default App;

```