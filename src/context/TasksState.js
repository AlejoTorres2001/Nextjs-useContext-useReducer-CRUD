import React,{useReducer} from 'react'
import TasksReducer from '../context/TasksReducer';
import TaskContext from './TaskContext';
import {CREATE_TASK,DELETE_TASK,UPDATE_TASK} from '../context/types'
import {v4 as uuid} from 'uuid'
const TasksState = ({children}) => {
    const [state, dispatch] = useReducer(TasksReducer, [{id:1,title:"hola",description:"chau"}])
    const  getTaskLength = () => state.length

    const createTask = (task) => {
        const {title,description} = task
        dispatch({
            type:CREATE_TASK,
            payload:{id:uuid(),title,description}
        })
    }
    const updateTask = (id,updatedTask) =>{
        dispatch({
            type:UPDATE_TASK,
            payload:{updatedTask,id}
        })
    } 
    const deleteTask = (id) =>{
        dispatch({
            type:DELETE_TASK,
            payload:{id}
        })
    }
    return (
        <TaskContext.Provider
            value={{getTaskLength,createTask,tasks:state,updateTask,deleteTask}}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TasksState
