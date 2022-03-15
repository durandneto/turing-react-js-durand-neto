import React, { useState, useEffect } from 'react';

export default function ComponentDidUpdate() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // after de component load
    // After count changed
    // I can use Jquey here it is safe :)
    // We can use setTimeout and promises here
    console.log('useEffect', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
