import React, { useEffect, useState } from 'react';
import { getRandomGreeting } from './api';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    getRandomGreeting()
      .then(response => setGreeting(response.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
