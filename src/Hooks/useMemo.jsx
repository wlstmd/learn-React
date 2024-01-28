import React, { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    let value = 0;
    for (let i = 0; i < count * 1000; i++) {
      value += i;
    }
    return value;
  }, [count]);

  return (
    <div>
      <p>Calculated value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
export default Example;