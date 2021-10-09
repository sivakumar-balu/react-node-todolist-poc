import { FaTimes } from 'react-icons/fa'
import moment from 'moment'

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`todo ${todo.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      <h3>
        {todo.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(todo.id)}
        />
      </h3>
      <p>{moment(todo.datetime).format('DD-MMM-yyyy')} at {moment(todo.datetime).format(' hh:mm A')}</p>
    </div>
  )
}

export default Todo