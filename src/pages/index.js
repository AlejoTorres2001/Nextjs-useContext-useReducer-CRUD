import React from "react";
import Layout from "../components/Layout";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTaskContext";

const index = () => {
  const { getTaskLength, tasks } = useTasks();
  console.log(tasks);
  return (
    <Layout>
      <div className="flex justify-center">
      {getTaskLength() === 0 ? (
        <h2>There are no tasks</h2>
      ) : (
        <div className="w-7/12">
           {tasks.map((t,index) => 
     
     <Task index={index} key={t.id} task={t} ></Task>

    )}
        </div>
       
      )}

      </div>
      
    </Layout>
  );
};

export default index;
