import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </h3>
      <p>{task.day}</p>
      <p><Link to={`/tasks/${task.id}`}>Detalhes</Link></p>
    </div>
  );
}

export default Task;
