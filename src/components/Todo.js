import { FaTimes } from 'react-icons/fa'
import moment from 'moment'

const Todo = ({ todo, onDelete}) => {
  return (
    <div
      className='todo'
    >
      <h3>
        {todo.todotext}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(todo.id)}
        />
      </h3>
      <p>{todo.location}{' '}</p>
      <p>{moment(todo.datetime).format('DD-MMM-yyyy')} at {moment(todo.datetime).format(' hh:mm A')}</p>
    </div>
  )
}

export default Todo