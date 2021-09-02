import Task from './Task'

// Goes through each index (each task) and maps them with a specified value, we map a key value (id)
// and the text found in the specific task with each index
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete}
            onToggle={onToggle}
            />
            ))}
        </>
    )
}

export default Tasks
