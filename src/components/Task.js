import {FaTimes} from 'react-icons/fa' // importing a specific ICON

const Task = ({task,onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} 
                        onDoubleClick={() => onToggle(task.id)}>
            <h3>
            {/* display the task text*/}
            {task.text} 
            {/* display the x icon, which will be used to delete tasks onClick */}
            <FaTimes style ={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)}/> 
            </h3>
            {/* displays a property of the task, in this case the day */}
            <p>{task.day}</p>
            <p>{task.id}</p>
        </div>
    )
}

export default Task
