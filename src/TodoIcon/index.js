import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as UpSVG } from './up.svg';
import { ReactComponent as DownSVG } from './down.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  "up": (color) => <UpSVG className="Icon-svg" fill={color} />,
  "down": (color) => <DownSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {

  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };