'use client';
import { useState } from 'react';

export default function ListItem({ item, idx }) {
  const [count, setCount] = useState(0);

  const onPlusClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <img src={`/images/food${idx}.png`} alt='음식' />
      <h3>{item}</h3>
      <span>{count}</span>
      <button onClick={onPlusClick}>+</button>
    </div>
  );
}
