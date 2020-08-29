import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Home/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
