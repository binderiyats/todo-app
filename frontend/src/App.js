import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Task } from "./Task";

import { MainLayouts } from "./layouts/MainLayouts";
import { Home } from "./pages/Home";
import { CompletedTaskPage } from "./pages/CompletedTaskPage";
import { AddTaskPage } from "./pages/AddTaskPage";
import { RunningTaskPage } from "./pages/RunningTaskPage";
import { EditTaskPage } from "./pages/EditTaskPage";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const editTask = (id) => {
    setTodoList.map((task) =>
      task.id === id
        ? {
            ...task,
            // incomplete
          }
        : task
    );
  };
  return (
    // <div className="App">

    //   <div className="addTask">
    //     <input onChange={handleChange} />
    //     <button onClick={addNewTask}>Add task</button>
    //   </div>
    //   <div className="list">
    //     {todoList.map((task) => {
    //       return (
    //         <Task
    //           taskName={task.taskName}
    //           id={task.id}
    //           completed={task.completed}
    //           deleteTask={deleteTask}
    //           completeTask={completeTask}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/running-task" element={<RunningTaskPage />} />
        <Route path="/completed-task" element={<CompletedTaskPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task" element={<EditTaskPage />} />
      </Route>
    </Routes>
  );
}

export default App;
