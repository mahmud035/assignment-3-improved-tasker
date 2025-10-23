import { createContext, useContext, useReducer, useState } from 'react';
import { initialState, tasksReducer } from '../reducers/tasksReducer';

//* Create Context API
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const tasks = state.tasks;
  const [searchText, setSearchText] = useState('');

  const tasksInfo = {
    tasks,
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
