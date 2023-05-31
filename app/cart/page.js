'use client';

import { createContext } from 'react';
import CartItem from './CartItem';

export const CartContext = createContext(null);
const cart = ['tomato', 'potato'];

export default function Cart() {
  return (
    <div>
      <h4 className='title'>Cart</h4>
      <CartContext.Provider value={cart}>
        <CartItem />
      </CartContext.Provider>
    </div>
  );
}
