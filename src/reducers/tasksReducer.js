import { initialTasks } from '../data/tasks';

// Initial State
const initialState = {
  tasks: [...initialTasks],
  searchedTasks: [],
};

// Reducer Function
const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case 'CHANGED': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case 'DELETE_ALL_TASK': {
      return {
        ...state,
        tasks: [],
      };
    }
    case 'SEARCH_TASKS': {
      return {
        ...state,
        searchedTasks: action.payload,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export { initialState, tasksReducer };
