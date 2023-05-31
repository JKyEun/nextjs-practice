'use client';

import { useContext } from 'react';
import { CartContext } from './page';

export default function CartItem() {
  const cart = useContext(CartContext);

  return (
    <div>
      {cart.map(el => (
        <div className='cart-item'>{el}</div>
      ))}
    </div>
  );
}
