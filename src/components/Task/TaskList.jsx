import { useTasks } from '../../contexts/TasksContext';
import Task from './Task';
import TaskTableHeader from './TaskTableHeader';

const TaskList = ({ handleEditTask, initialTasks, setInitialTasks }) => {
  const { tasks } = useTasks();

  return (
    <div className="overflow-auto">
      <table className="overflow-auto table-fixed xl:w-full">
        <TaskTableHeader />
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleEditTask={handleEditTask}
              initialTasks={initialTasks}
              setInitialTasks={setInitialTasks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
