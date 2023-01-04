import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const changeCounterHandler = (n: number) => {
    setCounter(counter + n);
  };

  return (
    <>
      <p>counter: {counter}</p>
      <button onClick={() => changeCounterHandler(1)}>increase</button>
      <button onClick={() => changeCounterHandler(-1)}>decrease</button>
    </>
  );
};

export default Counter;
