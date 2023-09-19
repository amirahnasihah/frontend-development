# Inside Context file

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

Then, to use the context we import it to our main App file.

App.js:

```javascript

```