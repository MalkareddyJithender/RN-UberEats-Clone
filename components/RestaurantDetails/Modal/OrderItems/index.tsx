import React from 'react';

import {FoodItemsType} from '../../../../store/features/restaurant';
import OrderItem from './OrderItem';

interface OrderItemsProps {
  items: FoodItemsType;
}

export default function Index({items}: OrderItemsProps): JSX.Element {
  return (
    <>
      {items.map((orderItem, i) => (
        <OrderItem key={i} name={orderItem.title} price={orderItem.price} />
      ))}
    </>
  );
}
