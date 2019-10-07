import React from 'react';
import Category from './components/Category/Category';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Monjo FamBam Jeopardy!!!</h1>
      <div className="row">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default App;
