import { useState} from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// function that calls: Header function and passes prop for title, Tasks component
const App = () => {
    // Now part of our component state using a hook, we would use setTasks[... tasks ...] (in return) to change the data if needed
    // we put our tasks variable into the top component so that we can pass it down to the other components as a prop
    const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text: 'Start of 2022',
              day: 'Jan 1st',
              reminder: true,
          },
          {
              id: 2,
              text: 'Valentine\'s Day',
              day: 'Feb 14th',
              reminder: false,
          },
          {
              id: 3,
              text: 'Christmas',
              day: 'Dec 25',
              reminder: true,
          },
      ])
    const [showAddTask, setShowAddTask] = useState(false)

  // Delete a Task given an id
  const deleteTask = (id) => {
    // sets the tasks to the filtered tasks (i.e every task EXCEPT the one we want to delete)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
    
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return (
    // HTML div class, (we call it container so that we can style it in CSS)
    <div className='container'>
      <Header title='Task ~ Tracker' 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd ={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* displays the tasks, so long as there are more than 1 tasks existing
          passes the function 'deleteTask' as onDelete to Tasks.js component
          Tasks.js takes it as a prop and sends it to Task.js component
          Task.js takes it as a prop and runs the function onClick, with the task.id as a paremeter */}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/>: 'No tasks left'} 
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
