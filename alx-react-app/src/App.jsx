import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>🚨 EDIT TEST 🚨</h1>
      <p>This confirms your edits are showing!</p>
    </div>
  );
}

export default App;
