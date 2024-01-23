const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [...tasks, action.payload];
    }
    case 'CHANGED': {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    }
    case 'DELETE_TASK': {
      return tasks.filter((task) => task.id !== action.payload.id);
    }
    case 'DELETE_ALL_TASK': {
      return [];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export { tasksReducer };
