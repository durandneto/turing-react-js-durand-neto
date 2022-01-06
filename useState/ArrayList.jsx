import React, { useState } from 'react';

const ArrayList = () => {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  console.log('render ArrayList');
  return (
    <div>
      The ArrayList is {JSON.stringify(list)} and the counter is {counter}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1); // counter is 0 + 1 === 1
          setList((oldList) => {
            oldList.push(counter);
            return oldList;
          });
        }}
      >
        Increase the List
      </button>
    </div>
  );
};

export default ArrayList;
