import React from 'react';
import Category from './components/Category/Category';
import Card from './components/Card/Card'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Monjo FamBam Jeopardy!!!</h1>
      <div className="row">
        <Category>Card</Category>
        <Category>Card</Category>
        <Category>Card</Category>
        <Category>Card</Category>
        <Category>Card</Category>
      </div>
      <div className="row">
        <Card>100</Card>
        <Card>100</Card>
        <Card>100</Card>
        <Card>100</Card>
        <Card>100</Card>
      </div>
      <div className="row">
        <Card>200</Card>
        <Card>200</Card>
        <Card>200</Card>
        <Card>200</Card>
        <Card>200</Card>
      </div>
      <div className="row">
        <Card>300</Card>
        <Card>300</Card>
        <Card>300</Card>
        <Card>300</Card>
        <Card>300</Card>
      </div>
      <div className="row">
        <Card>400</Card>
        <Card>400</Card>
        <Card>400</Card>
        <Card>400</Card>
        <Card>400</Card>
      </div>
      <div className="row">
        <Card>500</Card>
        <Card>500</Card>
        <Card>500</Card>
        <Card>500</Card>
        <Card>500</Card>
      </div>
    </div>
  );
}

export default App;
