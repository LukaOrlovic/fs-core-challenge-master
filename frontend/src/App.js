import "./App.css";

import React, { useEffect, useState } from 'react';
import Chat from "./components/Chat";
import Login from "./components/Login";
import axios from 'axios';
import { properties } from "./properties/Properties.js";

function App() {

  const [username, setUsername] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(properties.url + properties.login);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleUsernameSubmit(enteredUsername) {
    setUsername(enteredUsername);
    setActiveIndex(1);
  };

  return (
    <>
      <Login
        handleUsernameSubmit={handleUsernameSubmit}
        isActive={activeIndex === 0}
      />
      <Chat
        username={username}
        isActive={activeIndex === 1}
        oldMessages={messages}
      />
    </>
  );
}

export default App;
