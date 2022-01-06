import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log('render counter');
  return (
    <div>
      The Counter is {counter}
      <br />
      <button
        onClick={() => {
          setCounter((counter) => counter + 1); // counter is 0 + 1 === 1
        }}
      >
        Increase the counter
      </button>
    </div>
  );
};

export default Counter;
