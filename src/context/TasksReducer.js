
import {CREATE_TASK,DELETE_TASK,UPDATE_TASK} from '../context/types'

// eslint-disable-next-line import/no-anonymous-default-export
const reducer = (state,action) => {
    const {payload,type} = action;
    
    switch (type) {
        case CREATE_TASK:
            const {id,title,description} = payload
            return [...state,{id,title,description}]
        case UPDATE_TASK:
            
            return [...state.map(task => task.id === payload.id ? {...task,...payload.updatedTask} : task)]

        case DELETE_TASK:

            return state.filter(t => t.id !== payload.id )
        default:
            return state;
    }
}
export default reducer