import { useTasks } from '../../contexts/TasksContext';
import Task from './Task';
import TaskTableHeader from './TaskTableHeader';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="overflow-auto">
      <table className="overflow-auto table-fixed xl:w-full">
        <TaskTableHeader />
        <tbody>
          {tasks.length > 0 && (
            <>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
