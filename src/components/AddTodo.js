import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [datetime, setDatetime] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a todo')
      return
    }

    onAdd({ text, datetime, reminder })

    setText('')
    setDatetime('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Todo</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
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
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Todo' className='btn btn-block' />
    </form>
  )
}

export default AddTodo