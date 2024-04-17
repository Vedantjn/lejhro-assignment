import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Correct import statement for Hero component
import Book from './components/Book';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Book />
    </div>
  );
}

export default App;
