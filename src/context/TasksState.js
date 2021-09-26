import React,{useReducer} from 'react'
import TasksReducer from '../context/TasksReducer';
import TaskContext from './TaskContext';

const TasksState = ({children}) => {
    const [state, dispatch] = useReducer(TasksReducer, ["hola","chau"])
    const  getTaskLength = () => state.length
    return (
        <TaskContext.Provider
            value={{getTaskLength}}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TasksState
