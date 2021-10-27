import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Header"
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const Local_Storage_Key = "contacts"
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) =>{
    setContacts([...contacts,contact])
  }

  useEffect (()=>{
    const rertrieveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key))
    if(rertrieveContacts) setContacts(rertrieveContacts)

  },[])
  useEffect (()=>{
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts))

  },[contacts])
  return (
    <>
    <Header />
    <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts} />
    </>
  );
}

export default App;
