import Task from './Task';
import TaskTableHeader from './TaskTableHeader';

const TaskList = ({ tasks, handleEditTask }) => {
  return (
    <div className="overflow-auto">
      <table className="overflow-auto table-fixed xl:w-full">
        <TaskTableHeader />
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} handleEditTask={handleEditTask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
