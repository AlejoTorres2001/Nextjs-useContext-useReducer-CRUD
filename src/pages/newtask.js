import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../hooks/useTaskContext";
import { useRouter } from "next/router";
const TaskForm = () => {
  const {createTask,updateTask,tasks} =useTasks()
  const [task, setTask] = useState({title:'',description:''});
  const handleChange = (e) => setTask({...task,[e.target.name]:e.target.value})
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!isUpdate()) {createTask(task)}
    else{
      updateTask(query.id,task)
    }

    push('/')
  }
  const isUpdate = () => query.id ? true : false 
  const {push,query}=useRouter()
  useEffect(() => {
    if(isUpdate()){
      const taskFound = tasks.find(task => task.id === query.id)
      setTask({title:taskFound.title,description:taskFound.description})
      console.log(taskFound)
    }
  }, []);
  return (
    <Layout>
    <div className="flex justify-center items-center h-full">
     
      <form className="bg-gray-700 p-10 h-2/4" onSubmit={(e)=>handleSubmit(e)}>
       <h1 className="text-3xl mb-7">{isUpdate() ? 'Update Task' : 'Add a Task'}</h1>
     <input className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5" type="text" placeholder="write a title" value={task.title} name="title" onChange={(e)=>handleChange(e)}/>
      <textarea 
      className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
      name="description"  placeholder="write a descritpion" value={task.description} onChange={(e)=>handleChange(e)}></textarea>
      <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" disabled={task.title !== ''?false:true} >Save</button >
     </form>
   
    </div>
    </Layout>
  );
};

export default TaskForm;
