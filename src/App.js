// src/App.js
import React from 'react';
import Header from './components/Header';
import GeneratedMealPlan from './components/GeneratedMealPlan';
import Preferences from './components/Preferences';

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Preferences />
        <GeneratedMealPlan />
      </main>
    </div>
  );
};

export default App;