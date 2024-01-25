import { useState } from 'react';
import { useTasks } from '../../contexts/TasksContext';
import NoTaskFound from './NoTaskFound';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const TaskBoard = ({ setShowModal, setTaskToUpdate, handleEditTask }) => {
  const { tasks, searchText } = useTasks();
  const [initialTasks, setInitialTasks] = useState(tasks); // State variable to keep track of initial tasks before searching

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              setShowModal={setShowModal}
              setTaskToUpdate={setTaskToUpdate}
              initialTasks={initialTasks}
            />

            {tasks.length === 0 ? (
              <>
                {searchText ? (
                  // Show "No match found" message when search text is present
                  <NoTaskFound
                    message="No match task found!"
                    className="text-[#F5BF42]"
                  />
                ) : (
                  // Show "Task List is empty" message when no tasks exist
                  <NoTaskFound
                    message="Task List is empty!"
                    className="text-red-500"
                  />
                )}
              </>
            ) : (
              <TaskList
                handleEditTask={handleEditTask}
                initialTasks={initialTasks}
                setInitialTasks={setInitialTasks}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
