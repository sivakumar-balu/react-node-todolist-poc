import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
  const [todotext, setTodoText] = useState('')
  const [datetime, setDatetime] = useState('')
  const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!todotext) {
      alert('Please add a todo')
      return
    }

    if(!datetime) {
      alert('Please select date and time')
      return
    }

    onAdd({ todotext, datetime, location})

    setTodoText('')
    setDatetime('')
    setLocation('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Todo</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={todotext}
          onChange={(e) => setTodoText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Location</label>
        <input
          type='text'
          placeholder='Add Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='datetime-local'
          placeholder='Add Date & Time'
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Todo' className='btn btn-block' />
    </form>
  )
}

export default AddTodo