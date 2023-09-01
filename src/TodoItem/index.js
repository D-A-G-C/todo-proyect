import { useContext } from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { DownIcon } from '../TodoIcon/DownIcon';
import { UpIcon } from '../TodoIcon/UpIcon';
import { TodoContext } from "../TodoContext";
import './TodoItem.css';

function TodoItem(props) {

  const { text, completed, onComplete, onDelete, onUpPosition, onLowerPosition } = props
  const { showUp, showDown } = useContext(TodoContext);

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
      />

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
        onClick={onComplete}
      >
        {text}
      </p>
      {showUp && (
        <UpIcon
          onUpPosition={onUpPosition}
        />
      )}
      {showDown && (
        <DownIcon
          onLowerPosition={onLowerPosition}
        />
      )}
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  );
}

export { TodoItem };