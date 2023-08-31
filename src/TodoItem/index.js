import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { DownIcon } from '../TodoIcon/DownIcon';
import { UpIcon } from '../TodoIcon/UpIcon';
import './TodoItem.css';

function TodoItem(props) {

  const { completed, onComplete, onDelete, onUpPosition, onLowerPosition } = props

  

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
      />

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
        onClick={onComplete}
      >
        {props.text}
      </p>
      <UpIcon
        onUpPosition={onUpPosition}
      />
      <DownIcon
        onLowerPosition={onLowerPosition}
      />
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  );
}

export { TodoItem };