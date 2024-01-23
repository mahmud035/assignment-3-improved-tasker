import { toast } from 'react-toastify';
import { useTasks, useTasksDispatch } from '../../contexts/TasksContext';

const TaskActions = ({ setShowModal }) => {
  const { tasks, setSearchedTasks, setSearchText } = useTasks();
  const dispatch = useTasksDispatch();

  //* event handlers
  const handleSearchTasks = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);

    if (searchTerm === '') {
      setSearchedTasks([...tasks]); // Show all task if searchTerm is empty
    } else {
      const filtered = tasks.filter(
        (task) => task.title.toLowerCase().includes(searchTerm) // Filter tasks based on searchTerm
      );
      setSearchedTasks(filtered);
    }
  };

  const handleDeleteAllTask = () => {
    const confirm = window.confirm('Are you sure you want to DELETE ALL task?');

    if (confirm) {
      dispatch({
        type: 'DELETE_ALL_TASK',
      });

      toast.success('Delete All Task Successfully!');
    }
  };

  return (
    <div className="items-center justify-between mb-14 sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                onChange={handleSearchTasks}
                type="search"
                id="search-dropdown"
                className="z-20 block w-full px-4 py-2 pr-10 bg-gray-800 focus:outline-none"
                placeholder="Search Task"
                required
              />
              <button
                //* Not Needed
                // onSubmit={(e) => handleSearchTasks(e)}
                type="submit"
                className="absolute top-0 h-full text-white right-2 rounded-e-lg md:right-4"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <button
          onClick={() => setShowModal(true)}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <button
          onClick={handleDeleteAllTask}
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold disabled:bg-red-300 disabled:cursor-not-allowed"
          disabled={tasks.length === 0 ? true : false}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
