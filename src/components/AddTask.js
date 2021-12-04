import { useState } from 'react'

// setting our inputs
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    // checking the text
    if (!text) {
      alert('Please add a task')
      return
    }

    // adding a new task with the user's inputs
    onAdd({ text, day, reminder })

    // resetting our input boxes and buttons
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    // HTML to create the form in which the user will be able to input info for Task Name, Task Date and toggle a reminder for the Task
    // The user will then press the submit button which will take all these inputs and create a new task
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input
          type='text'
          placeholder='Add Date'
          value={day}
          onChange={(e) => setDay(e.target.value)}
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

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
