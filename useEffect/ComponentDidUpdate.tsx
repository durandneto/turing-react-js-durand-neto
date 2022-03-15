import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Similar to componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
