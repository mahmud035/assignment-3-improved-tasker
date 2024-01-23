import { useTasks } from '../../contexts/TasksContext';
import NoTaskFound from './NoTaskFound';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const TaskBoard = ({ setShowModal }) => {
  const { tasks } = useTasks();

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions setShowModal={setShowModal} />

            {tasks.length === 0 ? (
              <>
                <NoTaskFound />
              </>
            ) : (
              <>
                <TaskList />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
