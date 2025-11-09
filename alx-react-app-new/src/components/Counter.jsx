import React, { useState } from 'react';
function Counter() {
  // Initialize state with default count = 0
  const [count, setCount] = useState(0);
  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#f4f6fa',
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      width: '250px'
    }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '8px 12px' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '8px 12px' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#ffb3b3' }}
      >
        Reset
      </button>
    </div>
  );
}
export default Counter;