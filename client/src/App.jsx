import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>MERN Boilerplate</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;