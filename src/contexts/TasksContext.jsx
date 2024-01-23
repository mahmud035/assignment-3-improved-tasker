import { createContext, useContext, useReducer, useState } from 'react';
import { initialTasks } from '../data/tasks';
import { tasksReducer } from '../reducers/tasksReducer';

//* Create Context API
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [searchedTasks, setSearchedTasks] = useState([]);
  const [searchText, setSearchText] = useState(null);

  const tasksInfo = {
    tasks,
    searchedTasks,
    setSearchedTasks,
    searchText,
    setSearchText,
  };

  return (
    <TasksContext.Provider value={tasksInfo}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

//* Custom Hook for using Context
export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};
