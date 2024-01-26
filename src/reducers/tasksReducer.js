import { initialTasks } from '../data/tasks';

// Initial State
const initialState = {
  tasks: initialTasks,
};

// Reducer Function
const tasksReducer = (state, action) => {
  // console.log('state =>', state);
  // console.log('action =>', action);

  switch (action.type) {
    case 'ADD_TASK': {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case 'CHANGED_TASK': {
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
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );

      return {
        ...state,
        tasks: filteredTasks,
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
        tasks: action.payload,
      };
    }
    case 'TOGGLE_FAVORITE': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.isFavorite = !task.isFavorite;
            return task;
          } else {
            return task;
          }
        }),
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export { initialState, tasksReducer };
