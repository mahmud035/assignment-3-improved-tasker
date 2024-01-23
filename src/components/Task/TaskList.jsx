import { useTasks } from '../../contexts/TasksContext';
import Task from './Task';
import TaskTableHeader from './TaskTableHeader';

const TaskList = ({ handleEditTask }) => {
  const { tasks, searchedTasks } = useTasks();

  return (
    <div className="overflow-auto">
      <table className="overflow-auto table-fixed xl:w-full">
        <TaskTableHeader />
        <tbody>
          {searchedTasks?.length > 0 ? (
            <>
              {searchedTasks?.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleEditTask={handleEditTask}
                />
              ))}
            </>
          ) : (
            <>
              {tasks?.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleEditTask={handleEditTask}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
