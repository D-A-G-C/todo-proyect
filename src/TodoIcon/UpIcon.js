import React from 'react';
import { TodoIcon } from './';

function UpIcon({ onUpPosition }) {

  
  return (
    <TodoIcon
      type="up"
      color="gray"
      onClick={onUpPosition}
    />
  );
}

export { UpIcon };
