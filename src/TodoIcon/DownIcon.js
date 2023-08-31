import React from 'react';
import { TodoIcon } from '.';

function DownIcon({ onLowerPosition }) {

  
  return (
    <TodoIcon
      type="down"
      color="gray"
      onClick={onLowerPosition}
    />
  );
}

export { DownIcon };
