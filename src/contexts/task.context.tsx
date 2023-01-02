import React, { createContext, useContext } from "react";
import { Props } from "../models/DefaultProps";
import { Task } from "../models/Task";
//TODO: trade any types for Task

interface TaskContext {
  getTasks: () => any[];
  getTask: (taskId: string) => any;
  addTask: (task: any) => void;
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, task: any) => void;
}

const TaskContext = createContext({});

export const TaskProvider: React.FC<Props> = (props) => {
  // const tasksRef =
  //TODO: get tasks
  //TODO: get task by id
  //TODO: add task
  //TODO: remove task by id
  //TODO: update task by id
  return (
    <TaskContext.Provider value={{}}>{props.children}</TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);

export default TaskContext;
