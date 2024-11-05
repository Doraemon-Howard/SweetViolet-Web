// src/components/Preferences.js
import React, { useState } from 'react';

const Preferences = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('Maintain');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Set Your Preferences</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br />
      <label>
        Goal:
        <select value={goal} onChange={(e) => setGoal(e.target.value)} style={{ marginLeft: '10px' }}>
          <option value="Bulk">Bulk</option>
          <option value="Maintain">Maintain</option>
          <option value="Cut">Cut</option>
        </select>
      </label>
    </div>
  );
};

export default Preferences;