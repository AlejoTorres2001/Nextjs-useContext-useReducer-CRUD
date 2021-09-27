import React from "react";
import TasksReducer from "../context/TasksReducer";
import { VscTrash } from "react-icons/vsc";
import { useRouter } from "next/router";
import { useTasks } from "../hooks/useTaskContext";
const Task = ({ task, index }) => {
  const {deleteTask} = useTasks()
    const {push} = useRouter();
  return (
    <div onClick={()=>push(`/edit/${task.id}`)} className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center">
      <span className="text-5xl mr-5">{index}</span>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold ">{task.title}</h1>
          <button className="bg-red-500 hover:bg-red-400 px-3 py-1 inline-flex items-center" onClick={(e)=>{e.stopPropagation()
          deleteTask(task.id)
          }}>
              <VscTrash className="mr-2"/>
              DELETE</button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400">{task.id}</span>
        
      </div>
    </div>
  );
};

export default Task;
